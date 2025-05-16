using AIEApi.Models;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AIEApi.Data;

namespace AIEApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PurchaseOrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly HttpClient _httpClient;
        public PurchaseOrdersController(ApplicationDbContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PurchaseOrderDto>>> GetPOs()
        {
            var pos = await (from po in _context.PurchaseOrders
                             join importer in _context.Importer on po.ImporterId equals importer.ImporterId
                             join consignee in _context.Consignee on po.ConsigneeId equals consignee.ConsigneeId
                             join user in _context.Users on po.CreatedBy equals user.UserId.ToString()
                             select new PurchaseOrderDto
                             {
                                 POId = po.POId,
                                 PONumber = po.PONumber,
                                 POCode = po.POCode,
                                 PODate = po.PODate,

                                 ImporterId = po.ImporterId,
                                 ImporterName = importer.Name,

                                 ConsigneeId = po.ConsigneeId,
                                 ConsigneeName = consignee.Name,

                                 CreatedBy = po.CreatedBy,
                                 CreatedByName = user.UserName,

                                 CreatedAt = po.CreatedAt
                             }).ToListAsync();

            return Ok(pos);
        }



        [HttpGet("{id}")]
        public async Task<ActionResult<PurchaseOrder>> GetPO(int id)
        {
            var po = await _context.PurchaseOrders.FindAsync(id);
            if (po == null) return NotFound();
            return po;
        }

        [HttpPost]
        public async Task<ActionResult<PurchaseOrder>> CreatePO(PurchaseOrder po)
        {
            _context.PurchaseOrders.Add(po);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPO), new { id = po.POId }, po);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePO(int id, PurchaseOrder po)
        {
            if (id != po.POId) return BadRequest();
            _context.Entry(po).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePO(int id)
        {
            var po = await _context.PurchaseOrders.FindAsync(id);
            if (po == null) return NotFound();
            _context.PurchaseOrders.Remove(po);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

}

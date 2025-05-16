using AIEApi.Models;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AIEApi.Data;

namespace AIEApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PurchaseOrderItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly HttpClient _httpClient;
        public PurchaseOrderItemsController(ApplicationDbContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet("po/{poId}")]
        public async Task<ActionResult<IEnumerable<PurchaseOrderItem>>> GetItemsForPO(int poId)
        {
            return await _context.PurchaseOrderItems.Where(i => i.POId == poId).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<PurchaseOrderItem>> AddItem(PurchaseOrderItem item)
        {
            _context.PurchaseOrderItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetItemsForPO), new { poId = item.POId }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem(int id, PurchaseOrderItem item)
        {
            if (id != item.POItemId) return BadRequest();
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var item = await _context.PurchaseOrderItems.FindAsync(id);
            if (item == null) return NotFound();
            _context.PurchaseOrderItems.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

}

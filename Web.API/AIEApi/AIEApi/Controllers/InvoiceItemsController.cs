using AIEApi.Models;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AIEApi.Data;

namespace AIEApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceItemsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly HttpClient _httpClient;
        public InvoiceItemsController(ApplicationDbContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet("invoice/{invoiceId}")]
        public async Task<ActionResult<IEnumerable<InvoiceItem>>> GetItemsForInvoice(int invoiceId)
        {
            return await _context.InvoiceItems.Where(i => i.InvoiceId == invoiceId).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<InvoiceItem>> AddItem(InvoiceItem item)
        {
            _context.InvoiceItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetItemsForInvoice), new { invoiceId = item.InvoiceId }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem(int id, InvoiceItem item)
        {
            if (id != item.InvoiceItemId) return BadRequest();
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var item = await _context.InvoiceItems.FindAsync(id);
            if (item == null) return NotFound();
            _context.InvoiceItems.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

}

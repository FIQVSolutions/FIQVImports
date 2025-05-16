using AIEApi.Data;
using AIEApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AIEApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImportController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        private readonly HttpClient _httpClient;
        public ImportController(ApplicationDbContext context, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _httpClient = httpClientFactory.CreateClient();
        }
        // GET: api/Imports
        [HttpGet("imports")]
        public async Task<ActionResult<IEnumerable<Import>>> GetImports([FromQuery] int orgId)
        {
            var imports = await _context.Import
                .Where(i => i.OrganizationId == orgId)
                .ToListAsync();

            return imports;
        }


        [HttpGet("organizations")]
        public async Task<ActionResult<IEnumerable<Organization>>> GetOrganizations()
        {
            return await _context.Organizations.ToListAsync();
        }

        [HttpGet("users")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }
        [HttpGet("Consignees")]
        public async Task<ActionResult<IEnumerable<Consignee>>> GetConsignees([FromQuery] int orgId)
        {
            return await _context.Consignee.ToListAsync();
        }
        [HttpGet("Importers")]
        public async Task<ActionResult<IEnumerable<Importer>>> GetImporters([FromQuery] int orgId)
        {
            return await _context.Importer.ToListAsync();
        }

        [HttpGet("Products")]
        public async Task<ActionResult<IEnumerable<Products>>> GetProducts([FromQuery] int orgId)
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("Cities")]
        public async Task<ActionResult<IEnumerable<Cities>>> GetCities()        {
            return await _context.Cities.ToListAsync();
        }

        [HttpGet("Country")]
        public async Task<ActionResult<IEnumerable<Country>>> GetCountry()
        {
            return await _context.Country.ToListAsync();
        }

        [HttpGet("States")]
        public async Task<ActionResult<IEnumerable<State>>> GetStates()
        {
            return await _context.States.ToListAsync();
        }
    }
}

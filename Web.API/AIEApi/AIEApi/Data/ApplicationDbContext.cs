using System.Collections.Generic;
using AIEApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AIEApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Import> Import { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<Importer> Importer { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<Consignee> Consignee { get; set; }

        public DbSet<Cities> Cities { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<Country> Country { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<PurchaseOrder> PurchaseOrders { get; set; }
        public DbSet<PurchaseOrderItem> PurchaseOrderItems { get; set; }
        public DbSet<InvoiceItem> InvoiceItems { get; set; }

    }
}

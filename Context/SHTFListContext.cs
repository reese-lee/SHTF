using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System;

namespace SHTF.Context
{
  public class SHTFListContext : DbContext
  {
    public DbSet<Category> Category { get; set; }
    public DbSet<Item> Item { get; set; }
    public DbSet<Food> Food { get; set; }
    public DbSet<Supply> Supply { get; set; }
    public DbSet<Contact> Contact { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseMySQL("server=localhost;database=list;user=root;port=3306");
    }

    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    //     {
    //         modelBuilder.Entity<SHTF>()
    //             .Property(b => b.Url)
    //             .IsRequired();
    //     }
  }

  public class Category
  {
    public int Id { get; set; }
    public string Name { get; set; }
  }

  public class Item
  {
    public int ItemId { get; set; }
    public string ItemName { get; set; }
    public int ItemAmount { get; set; }
    public bool ItemDone { get; set; }
    public int ItemCatId { get; set; }
  }

  public class Food
  {
    public int FoodId { get; set; }
    public string FoodName { get; set; }
    public int FoodCatId { get; set; }
  }

  public class Supply
  {
    public int SupplyId { get; set; }
    public string SupplyName { get; set; }
    public int SupplyAmount { get; set; }
    public bool SupplyDone { get; set; }
    public int SupplyCatId { get; set; }
  }

  public class Contact
  {
    public int ContactId { get; set; }
    public string ContactName { get; set; }
    public string ContactNote { get; set; }
    public int ContactCatId { get; set; }
  }
}

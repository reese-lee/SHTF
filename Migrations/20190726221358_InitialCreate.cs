using Microsoft.EntityFrameworkCore.Migrations;

namespace SHTF.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Contact",
                columns: table => new
                {
                    ContactId = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    ContactName = table.Column<string>(nullable: true),
                    ContactNote = table.Column<string>(nullable: true),
                    ContactCatId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contact", x => x.ContactId);
                });

            migrationBuilder.CreateTable(
                name: "Food",
                columns: table => new
                {
                    FoodId = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    FoodName = table.Column<string>(nullable: true),
                    FoodAmount = table.Column<int>(nullable: false),
                    FoodDone = table.Column<short>(nullable: false),
                    FoodCatId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food", x => x.FoodId);
                });

            migrationBuilder.CreateTable(
                name: "Item",
                columns: table => new
                {
                    ItemId = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    ItemName = table.Column<string>(nullable: true),
                    ItemAmount = table.Column<int>(nullable: false),
                    ItemDone = table.Column<short>(nullable: false),
                    ItemCatId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item", x => x.ItemId);
                });

            migrationBuilder.CreateTable(
                name: "Supply",
                columns: table => new
                {
                    SupplyId = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    SupplyName = table.Column<string>(nullable: true),
                    SupplyAmount = table.Column<int>(nullable: false),
                    SupplyDone = table.Column<short>(nullable: false),
                    SupplyCatId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Supply", x => x.SupplyId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropTable(
                name: "Contact");

            migrationBuilder.DropTable(
                name: "Food");

            migrationBuilder.DropTable(
                name: "Item");

            migrationBuilder.DropTable(
                name: "Supply");
        }
    }
}

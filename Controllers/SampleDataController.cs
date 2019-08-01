using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc; 
using SHTF.Context;

namespace SHTF.Controllers
{
    [Route("api/[controller]")]
    public class ListsController : Controller
    {

        [HttpGet("[action]")]
        public List<Category> GetCategories(int startDateIndex)
        {
            List<Category> category = SHTFListData.GetCategory();
            return category;
        }

        [HttpGet("[action]")]
        public List<Contact> GetContacts(int startDateIndex)
        {
            List<Contact> contact = SHTFListData.GetContact();
            return contact;
        }

        [HttpGet("[action]")]
        public List<Food> GetFoods(int startDateIndex)
        {
            List<Food> food = SHTFListData.GetFood();
            return food;
        }

        [HttpGet("[action]")]
        public List<Item> GetItems(int startDateIndex)
        {
            List<Item> item = SHTFListData.GetItem();
            return item;
        }

        [HttpGet("[action]")]
        public List<Supply> GetSupplies(int startDateIndex)
        {
            List<Supply> supply = SHTFListData.GetSupply();
            return supply;
        }
    }
}

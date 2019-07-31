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

    }
}

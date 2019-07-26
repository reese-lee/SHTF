using System;
using System.Collections.Generic;
using SHTF.Context;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace SHTF
{
    public static class SHTFListData
    {
        public static List<Category> GetCategory()
        {
            //this sets up the db connection
            using (var db = new SHTFListContext())
            {
                //ToList() is a built-in method, and this is putting everything in the Category table into a list
                return db.Category.ToList();
            }
        }

        public static int Create(string catName)
        {
            var db = new SHTFListContext();
            var category = new Category {Name = catName};
            db.Category.Add(category);
            db.SaveChanges();
            return 1;
        }
    }
}

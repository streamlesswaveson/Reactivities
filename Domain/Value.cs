using System;

namespace Domain
{
    public class Value
    {
        //entity framework convention: property with name 'Id' automatically set as the PK : 
        public int Id { get; set; }
        public string Name { get; set; }
    }
}

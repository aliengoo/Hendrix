using System;

namespace Hendrix.Models
{
    public class Lead : Document
    {
        public Person Person { get; set; }

        public string Agent { get; set; }

        public string Status { get; set; }

        public DateTime Created { get; set; }

        public DateTime Updated { get; set; }
    }
}
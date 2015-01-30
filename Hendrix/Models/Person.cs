namespace Hendrix.Models
{
    public class Person
    {
        public Person()
        {
            Address = new Address();
        }

        public string FirstName { get; set; }

        public string MiddleNames { get; set; }

        public string LastName { get; set; }

        public string Title { get; set; }

        public Address Address { get; set; }

        public string BirthDate { get; set; }
    }
}
namespace Hendrix.Models
{
    public class Page
    {
        public int Current { get; set; }
        public int TotalPages { get; set; }
        public int Size { get; set; }
        public int Skip { get; set; }
    }
}
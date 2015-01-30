using System.Collections.Generic;

namespace Hendrix.Models
{
    public class PagedResult<T>
    {
        public IEnumerable<T> Results { get; set; }

        public Page Page { get; set; }
    }
}
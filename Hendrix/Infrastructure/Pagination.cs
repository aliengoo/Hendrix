using Hendrix.Models;

namespace Hendrix.Infrastructure
{
    /// <summary>
    /// Pagination.
    /// </summary>
    public static class Pagination
    {
        /// <summary>
        /// Adjusts the page, if required, based on the actual number of records available.
        /// </summary>
        /// <param name="page"> The page to act on. </param>
        /// <param name="count">Number of. </param>
        /// <returns>
        /// .
        /// </returns>
        public static Page Calculate(this Page page, int count)
        {
            if (count < 1)
            {
                page.Current = 0;
                page.TotalPages = 0;
            }

            var remainder = count % page.Size;

            page.TotalPages = (count / page.Size) + (remainder > 0 ? 1 : 0);

            page.Current = page.Current < 1 ? 1 : page.Current;

            if (page.TotalPages < page.Current)
            {
                page.Current = page.TotalPages;
            }

            if (page.Current > 0)
            {
                page.Skip = (page.Current - 1) * page.Size;
            }

            return page;
        }
    }
}
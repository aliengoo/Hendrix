using Hendrix.Models;

namespace Hendrix.Repositories
{
    public interface IRepository<T> where T : Document
    {
        T Find(string id);

        PagedResult<T> Query(string query, int page);

        T Save(T doc);

        void Delete(string id);
    }
}
using Hendrix.Models;
using MongoDB.Driver;
using MongoDB.Driver.Builders;

namespace Hendrix.Repositories
{
    public abstract class Repository<T> : IRepository<T> where T : Document
    {
        protected Repository(string connectionString, string collectionName)
        {
            var url = MongoUrl.Create(connectionString);

            Database = new MongoClient(url).GetServer().GetDatabase(url.DatabaseName);

            Collection = Database.GetCollection<T>(collectionName);
        }

        public MongoCollection<T> Collection { get; private set; }

        public MongoDatabase Database { get; private set; }

        public T Find(string id)
        {
            return Collection.FindOneById(id);
        }

        public abstract PagedResult<T> Query(string query, int page);

        public T Save(T doc)
        {
            Collection.Save(doc);

            return doc;
        }

        public void Delete(string id)
        {
            Collection.Remove(Query<T>.EQ(d => d.Id, id));
        }
    }
}
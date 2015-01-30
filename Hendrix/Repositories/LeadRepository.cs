using Hendrix.Models;
using Ninject;

namespace Hendrix.Repositories
{
    public class LeadRepository : Repository<Lead>
    {
        public LeadRepository([Named("connectionString")]string connectionString) : base(connectionString, "Leads")
        {
        }

        public override PagedResult<Lead> Query(string query, int page)
        {
            throw new System.NotImplementedException();
        }
    }
}
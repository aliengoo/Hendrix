using System.Web.Http;
using Hendrix.Models;
using Hendrix.Repositories;

namespace Hendrix.Controllers
{
    [RoutePrefix("api/lead")]
    public class LeadController : ApiController
    {
        private readonly IRepository<Lead> _leads;

        public LeadController(IRepository<Lead> leads)
        {
            _leads = leads;
        }

        [Route("{id}")]
        public IHttpActionResult Get(string id)
        {
            var lead = _leads.Find(id);

            if (lead == null)
            {
                return NotFound();
            }

            return Ok(lead);
        }

        [Route("{id}")]
        public IHttpActionResult Put(Lead lead)
        {
            _leads.Save(lead);

            return Ok(lead);
        }

        [Route]
        public IHttpActionResult Post(Lead lead)
        {
            _leads.Save(lead);

            return Ok(lead);
        }

        [Route("{id}")]
        public IHttpActionResult Delete(string id)
        {
            _leads.Delete(id);

            return Ok();
        }

        [Route("query")]
        [HttpGet]
        public IHttpActionResult Query(string query, int page = 1)
        {
            var result = _leads.Query(query, page);

            return Ok(result);
        }
    }
}
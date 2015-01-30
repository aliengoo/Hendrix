using System.Configuration;
using System.Net.Http.Formatting;
using System.Web.Http;
using Hendrix;
using Hendrix.Infrastructure;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace Hendrix
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration
            {
                DependencyResolver = new NinjectResolver(NinjectConfig.CreateKernel()),
                IncludeErrorDetailPolicy =
                    ConfigurationManager.AppSettings["Environment"] == "Dev"
                        ? IncludeErrorDetailPolicy.Always
                        : IncludeErrorDetailPolicy.Never
            };

            config.Formatters.Clear();
            config.Formatters.Add(new JsonMediaTypeFormatter());

            config.MapHttpAttributeRoutes();

            app.UseWebApi(config);
        }
    }
}

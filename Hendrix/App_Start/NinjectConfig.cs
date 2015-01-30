using System;
using System.Configuration;
using Hendrix.Models;
using Hendrix.Repositories;
using Ninject;

namespace Hendrix
{
    public class NinjectConfig
    {
        public static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();

            try
            {
                var connectionString = ConfigurationManager.ConnectionStrings["hendrix"].ConnectionString;

                kernel.Bind<string>().ToConstant(connectionString).Named("connectionString");

                kernel.Bind<IRepository<Lead>>().To<LeadRepository>();

                return kernel;
            }
            catch (Exception)
            {
                throw;
            }
        } 
    }
}
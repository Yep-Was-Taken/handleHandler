using AzureFunctionCosmos.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace AzureFunctionCosmos
{
    public static class GetAll
    {
        [FunctionName("GetAll")]
        public static async Task<IEnumerable<Employee>> Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "Get")]HttpRequest req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function to get all data from Cosmos DB");

            IDocumentDBRepository<Employee> Respository = new DocumentDBRepository<Employee>();
            return await Respository.GetItemsAsync("Employee");
        }
    }

    public static class GetSingle
    {
        [FunctionName("GetSingle")]
        public static async Task<Employee> Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "Get/{id}/{cityName}")]HttpRequest req, TraceWriter log, string id, string cityName)
        {
            log.Info("C# HTTP trigger function to get a single data from Cosmos DB");

            IDocumentDBRepository<Employee> Respository = new DocumentDBRepository<Employee>();
            var employees = await Respository.GetItemsAsync(d => d.Id == id && d.Cityname == cityName, "Employee");
            Employee employee = new Employee();
            foreach (var emp in employees)
            {
                employee = emp;
                break;
            }
            return employee;
        }
    }

    public static class CreateOrUpdate
    {
        [FunctionName("CreateOrUpdate")]
        public static async Task<bool> Run([HttpTrigger(AuthorizationLevel.Function, "post", "put", Route = "CreateOrUpdate")]HttpRequest req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function to create a record into Cosmos DB");
            try
            {
                IDocumentDBRepository<Employee> Respository = new DocumentDBRepository<Employee>();
                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var employee = JsonConvert.DeserializeObject<Employee>(requestBody);
                if (req.Method == "POST")
                {
                    employee.Id = null;
                    await Respository.CreateItemAsync(employee, "Employee");
                }
                else
                {
                    await Respository.UpdateItemAsync(employee.Id, employee, "Employee");
                }
                return true;
            }
            catch
            {
                log.Info("Error occured while creating a record into Cosmos DB");
                return false;
            }

        }
    }

    public static class Delete
    {
        [FunctionName("Delete")]
        public static async Task<bool> Run([HttpTrigger(AuthorizationLevel.Function, "delete", Route = "Delete/{id}/{cityName}")]HttpRequest req, TraceWriter log, string id, string cityName)
        {
            log.Info("C# HTTP trigger function to delete a record from Cosmos DB");

            IDocumentDBRepository<Employee> Respository = new DocumentDBRepository<Employee>();
            try
            {
                await Respository.DeleteItemAsync(id, "Employee", cityName);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}

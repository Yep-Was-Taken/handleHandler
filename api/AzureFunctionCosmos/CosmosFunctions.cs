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
        public static async Task<IEnumerable<Posting>> Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "Get")]HttpRequest req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function to get all data from Cosmos DB");

            IDocumentDBRepository<Posting> Respository = new DocumentDBRepository<Posting>();
            return await Respository.GetItemsAsync("Posting");
        }
    }

    public static class GetSingle
    {
        [FunctionName("GetSingle")]
        public static async Task<Posting> Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "Get/{id}/{cityName}")]HttpRequest req, TraceWriter log, string id, string cityName)
        {
            log.Info("C# HTTP trigger function to get a single data from Cosmos DB");

            IDocumentDBRepository<Posting> Respository = new DocumentDBRepository<Posting>();
            var postings = await Respository.GetItemsAsync(d => d.Id == id && d.handle == Handle, "Posting");
            Posting posting = new Posting();
            foreach (var emp in postings)
            {
                posting = emp;
                break;
            }
            return posting;
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
                IDocumentDBRepository<Posting> Respository = new DocumentDBRepository<Posting>();
                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var posting = JsonConvert.DeserializeObject<Posting>(requestBody);
                if (req.Method == "POST")
                {
                    posting.Id = null;
                    await Respository.CreateItemAsync(posting, "Posting");
                }
                else
                {
                    await Respository.UpdateItemAsync(posting.Id, posting, "Posting");
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
        public static async Task<bool> Run([HttpTrigger(AuthorizationLevel.Function, "delete", Route = "Delete/{id}/{handle}")]HttpRequest req, TraceWriter log, string id, string handle)
        {
            log.Info("C# HTTP trigger function to delete a record from Cosmos DB");

            IDocumentDBRepository<Posting> Respository = new DocumentDBRepository<Posting>();
            try
            {
                await Respository.DeleteItemAsync(id, "Posting", handle);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}

using Newtonsoft.Json;

namespace AzureFunctionCosmos.Data
{
    public class Employee
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }
        public string Handle { get; set; }
        public string Price { get; set; }
    }
}

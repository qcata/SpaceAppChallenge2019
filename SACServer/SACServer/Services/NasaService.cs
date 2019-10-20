using System.Net.Http;
using System.Threading.Tasks;

namespace SACServer.Services
{
    public class NasaService
    {
        public async Task<string> GetNasaDataFromAPIAsync()
        {
            string something = string.Empty;
            string baseUrl = "https://podaac.jpl.nasa.gov/ws/search/granule/?datasetId=PODAAC-AKASA-XOGD1";
            using (HttpClient client = new HttpClient())

            using (HttpResponseMessage res = await client.GetAsync(baseUrl))
            using (HttpContent content = res.Content)
            {
                string data = await content.ReadAsStringAsync();
                if (data != null)
                {
                    something = data.ToString();
                }
            }
            return something;
        }
    }
}

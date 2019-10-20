using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SACServer.Models;
using SACServer.Services;

namespace SACServer.Controllers
{
    public class HomeController : Controller
    {
        private NasaService _nasaService;

        public HomeController()
        {
            _nasaService = new NasaService();
        }

        public IActionResult Index()
        {
            var nasaApiRespone = Task.Run(async () => await _nasaService.GetNasaDataFromAPIAsync()).Result;
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

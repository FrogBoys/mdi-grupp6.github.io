(function(window, undefined) {
  var dictionary = {
    "a15005c9-91c5-4af5-a0cb-0acdb959e5b7": "MEddelanden",
    "8b01df4e-0d0b-431b-9205-5462e65c239d": "hantera elever",
    "175935ce-83e3-4400-903d-b05221c4fde3": "dontshowagain",
    "228367e9-04ac-4de2-938d-9eef96abf2c8": "Meddelanden Oskar Andersson",
    "aa722591-ed32-4562-94bf-9ae66f5ebd3a": "Oskar",
    "d495a1f9-7866-49b6-8799-46549ecea684": "Närvohantering",
    "8fa4b8bb-d584-410f-8ba9-610132e4299f": "Lägg till händelsen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "cec56f1b-f69e-438b-91fa-d969fdf1fbc9": "Anmäldfrånvaro",
    "079fb2a4-a415-46cf-b73b-7844e90b83f5": "Av.Upphämtning",
    "ac30a377-5221-431c-b65d-a0bcb1a278b5": "test",
    "4ed4d886-2ced-4654-beac-1f4d20995b50": "Oskars Vårdnadshavare",
    "5e94cb8c-05a1-4f87-8b57-e0b9ce37c0cb": "Anmäl frånvaro",
    "c2123357-3ce3-4cec-9ad9-6f2127d742ef": "Information",
    "5f26cb5d-a11d-45e6-8841-531fddb4f33c": "oscarskola",
    "1fda3486-66cd-4fba-a5ad-2503f0e3566c": "3",
    "45efa876-fdea-4fee-918f-9b2105e9ae0d": "2",
    "7005f3f8-a7b7-4ecb-8bf3-2a30d8f3f23f": "Skolmeddel",
    "ff89943d-3fd4-4062-b43c-d42b5c642431": "Skola",
    "1510bc7b-3188-4206-bc1c-6494f985c2ff": "Grupp X",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "65978e6b-b494-49cd-af77-bdc1b7132267": "Ställ ditt barn i kö"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
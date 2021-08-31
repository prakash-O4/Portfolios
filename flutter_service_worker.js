'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1d934dbae720d98426302c5167cd7182",
".git/config": "495ecd0c2548c22dc6701ebd042154a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "902737a85e504552fb0d218cd0a6c471",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e7194cc69b46ab70e23711cd5688763",
".git/logs/refs/heads/main": "e6b1a2439bed397b24b1347422fa655e",
".git/logs/refs/remotes/origin/main": "80eea896aee2b4e6d89c259035c54d7d",
".git/objects/03/79543d97cfe05c568cf658c16805fe12f61166": "58af410e9be636b134baf5fd6ad3925d",
".git/objects/03/a47f8b2cca527af9edf8b982770300932c13bf": "ae480c5b54a416559c7bc314c4488a2e",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/0d/72c9a040e6091746c57ef433f3d33e917e216f": "a4449c2c5138206c196e20d37426e74d",
".git/objects/0e/3108fca1afb0c5e46571ff379d18e56abbde27": "5415680cd609ac05b1d5596a2c0a528c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/24/683ac9bfd16d7a71251abbcce73992591c2399": "c90f63d9ef1daeb06f4401eceb3f8797",
".git/objects/30/a7bbb18d4428b2deefc22a1aebd7cb7b846f2f": "dd6cbe1ef27ea0d88bd9c79f97aad1d3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "a5aa95f226dbcca106d7c1cb2537c89d",
".git/objects/43/1fe65cb0db3466fd07fccf1253520d874580cb": "e418ce0f054c7cef7eb4f065ee91d8da",
".git/objects/45/ca6c0e0cceb4a85d83936e923f916cbc4751b8": "9707245b33a51f269933ecf12ad12ee3",
".git/objects/4f/a0ccce0eb3ee6dc85dfbe2c0c43df1f10323dd": "9b88f01f306c7829863269f6786531dc",
".git/objects/53/a9f75ca7a4b4e5061b98ef1956b7225f6637d0": "6e850724473ad036c480df58239695d8",
".git/objects/56/192d35a1e92dfab704d12da87020605b457965": "38a3b822fd3e1723a225e2d185d22e6f",
".git/objects/60/38bb6f76e7445e9ac7d39cd06c2f70fab6c1db": "7ab6f80d678a40b8b8256656e7e654eb",
".git/objects/61/e784bae2a58284ebf9868d33a8e3ba390576bc": "afff82a8be7539abfdc1995a2f90f5d9",
".git/objects/66/0ebf364318591d7bbd16c770abefad5c4def6b": "901a4ac6e04d847751c994b132b40c2b",
".git/objects/67/75daba93877f4fa305ec6f3c6c2b38ebcadc2e": "6439793c08e8395d3add187ce5a95cc9",
".git/objects/67/b4dafc029a5881ebf29e3bc461796b6a2c9647": "add7620a3fe69a5e9ff5988ae692953d",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "65bf0955957cd1cc0b56cc92d9aeeb6e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/716a7df2e5cf717ef66790ed39ccdc40d42a5e": "b20369f63039a1feab2866a45af14bd2",
".git/objects/80/3b1d82beaf4af4d73dc6cd46d0126fead99fb9": "f663dae016d4ca1967eb99bd30eb937c",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/83/85d8bf921719b87f666fa41038181bcad90800": "036009791af4e425b2bf1e1aa402a2c0",
".git/objects/85/ec94e391d519f5e8aad38ca9f24d6f633121b0": "27ca1b1946b67cbdeca32fd82e08b2d4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/f169f63f25554da206b459d8c8d9f3d1856845": "f02df976aeb8a9256e3e4304ed64f1e5",
".git/objects/93/96b19a06029f59bdc8da513158f6a6e8df0a29": "0019d255a8afb007e2be2e37b36dc383",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/97/27867608ab8a34634a23e9fbab5c62aabcc15b": "91657f3133f34aeb45b9c60bba1f3f26",
".git/objects/a0/2804ba92bc577ac9dd81aaa0f3b2b8228beba6": "6690b6747b2640bd6991b744656350b7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/66f7ea982558c6df320dcb26e3fb8f6fa531db": "d6eef5822e35256e1f3966b498862ab4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/be/83f0030ac4d7749ec96ec5e31b77c14fa58094": "37552715be6b0ac53c340dab9b701bfa",
".git/objects/be/93b4a7b3ccd4559c12fc553543ca55f7135986": "a6183bb82ac741129df09dda148dd979",
".git/objects/c6/087511f8d80c357883e1509e6b837314f2da5b": "2dfe6eb6e822975b4edc7c1948efbc1c",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d1/ce529a5dda8f120b0cec789e71f3d3cded5147": "eb16951d77a093131a7ce29f569899d3",
".git/objects/d6/e3b1d7a375fca31b465a3d2a39d241fc14eb5a": "562a8c71ca55a7adeba38099037521cc",
".git/objects/db/7f8afc38f6f35d93e325f082f075e020cb9f1a": "51c2b4c6800e9eafcb3d7639dd5059e6",
".git/objects/e3/b21e69f0cd7694804a7e333f83380dfb462452": "754f0956b4bb8775d876bbcf4b4081c5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f1/80a6fd70fbf060dce0093de44f5459f0a0caf7": "5c04de8ceea42718b00479e18489bb24",
".git/objects/fa/49950ee8bdd68d9a742c3c75a46681529523eb": "55a352c1da2e5e83c39244056fdb9c45",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/refs/heads/main": "dc24d0b9be89d7f334b2c43f4052ae42",
".git/refs/remotes/origin/main": "dc24d0b9be89d7f334b2c43f4052ae42",
"assets/AssetManifest.json": "cf80393ed11969023a683b88816d494c",
"assets/assets/contact_us.json": "276566ca8e4316d9a832ed389b989821",
"assets/assets/done.json": "8514e13856aee13e49425c626c8b2ed9",
"assets/assets/loading.gif": "bc9f105d9e3c6ad746045fa440bf63dc",
"assets/FontManifest.json": "24636421a941e1a973ed7962700ca341",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/benz.jpg": "66746e1d6183e7f82525a64de3d19ca5",
"assets/images/r1.JPG": "e12771d5104b56fbb00128f7051ee9b6",
"assets/images/stark.png": "334c60fc37e2646be38784fac3bd2f39",
"assets/NOTICES": "e5fa45820a0d74b5cbce2471e13e7aff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"img/splash.gif": "21df156056a6a6cfe1129c883fcb5754",
"index.html": "4e34f6efe68196222bf9d5355570770b",
"/": "4e34f6efe68196222bf9d5355570770b",
"main.dart.js": "e5d334d91caea4c6aa6e86a0eff2417b",
"manifest.json": "7aee2150f1af2a81d01576d7ad2ec058",
"style.css": "a0af6dd0836002c5c87a6a1511becf80",
"version.json": "d0affaa9b730bf957ca4a9e028fd2d27"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

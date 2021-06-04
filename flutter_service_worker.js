'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6286680ff1a9862d25a7ca1b015ba89a",
"index.html": "b1a9067a219902200ea8a071cfb82c1f",
"/": "b1a9067a219902200ea8a071cfb82c1f",
"main.dart.js": "6b81648a4e64fc5d245c765fc0681f00",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ad7257a7694598f5130a00a75897421",
"assets/images/alert.svg": "cefb757a592df382081138b1f6301b42",
"assets/images/alert.png": "3b8f44efb6d35cfda3f1b3aa407bf9b8",
"assets/images/profile.jpg": "b5d9ff61e834e0b9c9d6028e47a9182d",
"assets/AssetManifest.json": "29ba942a633054e2a8f6406b29954229",
"assets/NOTICES": "4874bce573394bea1606e4fee8427c28",
"assets/FontManifest.json": "c116bf63e359b397440aa62d4026983f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/fonts/AcuminPro-ExtraLight.ttf": "312c61f60ccf382b29052decf202ac90",
"assets/fonts/AppIcons.ttf": "26c0f092013ab3b82c259d138d4f9ec2",
"assets/fonts/AcuminPro-Semibold.ttf": "00562a4d62f9e3b6488febb752622df5",
"assets/fonts/AcuminPro-LightItalic.ttf": "29b500c67b3959f42b334067fa03d032",
"assets/fonts/AcuminPro-Light.ttf": "c8b211054eceaf93493932518865d675",
"assets/fonts/AcuminPro-Regular.ttf": "428f22add676a83fed7fb756439c173f",
"assets/fonts/AcuminPro-Medium.ttf": "b328aacc16c00de0b048baee088c5491",
"assets/fonts/Barlow-Regular.ttf": "2cce8c806c2d2e03adc2b239ae316b76",
"assets/fonts/AcuminPro-Bold.ttf": "adc9cc258c0dd6643db3ceb5e14eb901",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/last-visit-card-icon.png": "95ce73728cac0e954921bb26768b8379",
"assets/assets/images/headphones.png": "e9321151732a3de332dc10ef7d44ce9a",
"assets/assets/images/fire-enabled.png": "406db38ee48e90b4c1aa99ff87c5281a",
"assets/assets/images/login_bg.png": "1b8c6ce793da0a30631270d187651633",
"assets/assets/images/hamster-white.png": "0831eb115476c68831d48cb1e37e95e4",
"assets/assets/images/paint.png": "43347223889b1f6cdd42ad6c97a90c4a",
"assets/assets/images/home.png": "594ec7816741a07fed2fda592cd1861f",
"assets/assets/images/hamster-white@2x.png": "43cba810afb9c06fddc69c705f7dd878",
"assets/assets/images/background.png": "700e1bc97631db38a38df1cd48b97ab6",
"assets/assets/images/hamster.png": "cf34638d9ce28c5908a76d669bc5aa3d",
"assets/assets/images/customer.png": "ad460b3aba31c43ab0041bc96098d7b2",
"assets/assets/images/frost-disabled.png": "9213dbd76ae575e96c0607807ab751ad",
"assets/assets/images/scanner.png": "33db48e2a07187f8cc30147bd985e57e",
"assets/assets/images/profile.png": "febd67d2d75ef53d38ae4a308b1fd8da",
"assets/assets/images/img1.png": "848a5e37115f7e0821d2072c25ea2db1",
"assets/assets/images/exit.png": "a6d06ece4aeea90b14d88b1f88b21215",
"assets/assets/images/appBar-icon.png": "9df3c59357ca43f63e2f02f55eb8c424",
"assets/assets/images/advertising.png": "891d0a8e93ebe6113e546003893cc468",
"assets/assets/images/hamster-white-old.png": "1b41ccddc2a780762200d2569868bdaa",
"assets/assets/images/security.png": "649e20838b571492961a8154f1c5ad3b",
"assets/assets/images/paper-plane.png": "117fb85e1685e4a86b94f8881353ec7c",
"assets/assets/images/setting.png": "199797c8f9cf98e4e4830a206f4dc732",
"assets/assets/images/back.png": "0e530bdbc3c1a6dd2ed6caaaa8f67c80"
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

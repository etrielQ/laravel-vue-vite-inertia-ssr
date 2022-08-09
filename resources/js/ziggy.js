const Ziggy = {"url":"http:\/\/127.0.0.1:8000","port":8000,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"homepage":{"uri":"\/","methods":["GET","HEAD"]},"about":{"uri":"about","methods":["GET","HEAD"]},"production":{"uri":"production","methods":["GET","HEAD"]},"product":{"uri":"product","methods":["GET","HEAD"]},"product-detail":{"uri":"product-detail","methods":["GET","HEAD"]},"projects":{"uri":"projects","methods":["GET","HEAD"]},"project-detail":{"uri":"project-detail","methods":["GET","HEAD"]},"blog":{"uri":"blog","methods":["GET","HEAD"]},"blog-detail":{"uri":"blog-detail","methods":["GET","HEAD"]},"contact":{"uri":"contact","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };

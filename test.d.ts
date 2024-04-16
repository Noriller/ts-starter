type RouteManager = typeof import('@adonisjs/framework/src/Route/Manager');

declare namespace Adonis {
  interface Route extends Omit<RouteManager, 'group'> {
    group(
      arg: Function | string,
      callback?: Function
    ): ReturnType<RouteManager['group']>;
    group(arg: Function): ReturnType<RouteManager['group']>;
    group(arg: string, callback: Function): ReturnType<RouteManager['group']>;
  }
}

declare function use(name: 'Route'): Adonis.Route;

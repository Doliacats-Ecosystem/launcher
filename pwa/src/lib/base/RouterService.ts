import { Action, Blocker, BrowserHistory, Listener, Location, State, To, createMemoryHistory, Update, createBrowserHistory } from "history";
import { action, observable } from "mobx";

import { Subject } from "react-declarative";

import { makeObservable } from "mobx";

export const mainHistory = window.location.protocol === 'file:'
  ? createMemoryHistory()
  : createBrowserHistory();

export class RouterService implements BrowserHistory {

  readonly changeSubject = new Subject<Update>();
  
  location: Location = null as never;
  action: Action = null as never;
  
  constructor() {
    this.initChangeSubject();
    this.initRouter();
    makeObservable(this, {
      location: observable,
      action: observable,
      createHref: action.bound,
      push: action.bound,
      replace: action.bound,
      go: action.bound,
      back: action.bound,
      forward: action.bound,
      block: action.bound,
      updateState: action.bound,
    });
  }

  private initChangeSubject = () => {
    mainHistory.listen((update) => this.changeSubject.next(update));
  };

  private initRouter = () => {
    this.location = mainHistory.location;
    this.action = mainHistory.action;
  };

  updateState() {
    const { location, action } = mainHistory;
    this.location = location;
    this.action = action;
  }

  createHref(to: To) {
    const result = mainHistory.createHref(to);
    this.updateState();
    return result;
  }

  push(to: To, state?: State) {
    const result = mainHistory.push(to, state);
    this.updateState();
    return result;
  }

  replace(to: To, state?: State) {
    const result = mainHistory.replace(to, state);
    this.updateState();
    return result;
  }

  go(delta: number) {
    const result = mainHistory.go(delta);
    this.updateState();
    return result;
  }

  back() {
    const result = mainHistory.back();
    this.updateState();
    return result;
  }

  forward() {
    const result = mainHistory.forward();
    this.updateState();
    return result;
  }

  listen(listener: Listener) {
    const result = mainHistory.listen(listener);
    this.updateState();
    return result;
  }

  block(blocker: Blocker) {
    const result = mainHistory.block(blocker);
    this.updateState();
    return result;
  }
};

export default RouterService;

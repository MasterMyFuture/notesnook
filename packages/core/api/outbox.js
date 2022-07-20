class Outbox {
  /**
   *
   * @param {import("./index").default} db
   */
  constructor(db) {
    this._db = db;
    this.outbox = {};
  }

  async init() {
    this.outbox = (await this._db.storage.read("outbox")) || {};

    for (var id in this.outbox) {
      const data = this.outbox[id];
      switch (id) {
        case "reset_password":
        case "change_password":
          if (await this._db.user._updatePassword(id, data))
            await this.delete(id);
          break;
      }
    }
  }

  async add(id, data, action) {
    this.outbox[id] = data;
    await this._db.storage.write("outbox", this.outbox);
    await action();
    await this.delete(id);
  }

  delete(id) {
    delete this.outbox[id];
    return this._db.storage.write("outbox", this.outbox);
  }
}
export default Outbox;
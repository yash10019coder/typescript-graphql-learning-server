"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = require("../model/author");
class AuthorRepo {
    static findById(id) {
        return author_1.AuthorModel.findById(id).exec();
    }
    static getAllAuthors() {
        return author_1.AuthorModel.find().exec();
    }
    static async addAuthor(author) {
        return author_1.AuthorModel.create(author);
    }
}
exports.default = AuthorRepo;

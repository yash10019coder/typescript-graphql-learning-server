import {Document, Types} from "mongoose";
import {AuthorModel, IAuthor} from "../model/author";

export default class AuthorRepo {
    public static findById(id: Types.ObjectId): Promise<(Document<unknown, any, IAuthor> & IAuthor & { _id: Types.ObjectId }) | null> {
        return AuthorModel.findById(id).exec();
    }

    public static getAllAuthors(): Promise<(Document<unknown, any, IAuthor> & IAuthor & { _id: Types.ObjectId })[]> {
        return AuthorModel.find().exec();
    }
}
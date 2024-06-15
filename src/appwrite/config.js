import conf from "../conf/conf.js";
import { Client, ID, Databases ,Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appDatabaseId,
        conf.appCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("AppWrite service :: createPost :: error", error);
    }
  }
  async updatePost( slug, {title, content, featuredImage, status, userId }) {
    try {
        return await this.databases.updateDocument(
            conf.appDatabaseId,
            conf.appCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status  
            }
        )
    } catch (error) {
        console.log("AppWrite service :: updatePost :: error", error);

    }
  }
  async deletePost(slug)
  {
    try {
        await this.databases.deleteDocument(
            conf.appDatabaseId,
            conf.appCollectionId,
            slug
        )
        return true;
    } catch (error) {
        console.log("AppWrite service :: deletePost :: error", error);
        return false;
    }
  }
  async getPost(slug)
  {
    try {
        return await this.databases.getDocument(
            conf.appDatabaseId,
            conf.appCollectionId,
            slug
        )
    } catch (error) {
        console.log("AppWrite service :: getPost :: error", error);
        return false;
    }
  }
  async getPosts(queries = [Query.equal("status","active")])
  {
    try {
        return await this.databases.listDocuments(
            conf.appDatabaseId,
            conf.appCollectionId,
            queries
        )
    } catch (error) {
        console.log("AppWrite service :: getPosts :: error", error);
        return false;
    }
  }

  //file upload
  async uploadFile(file)
  {
    try {
        return await this.bucket.createFile(
            conf.appBucketId,
            ID.unique(),
            file
        );
    } catch (error) {
        console.log("AppWrite service :: uploadFile :: error", error);
        return false;
    }
  }
  async deleteFile(fileId)
  {
    try {
        await this.bucket.deleteFile(
            conf.appBucketId,
            fileId
        )
        return true;
    } catch (error) {
        console.log("AppWrite service :: uploadFile :: error", error);
        return false;
    }
  }
  getFilePreview(fileId)
  {
    return this.bucket.getFilePreview(
        conf.appBucketId,
        fileId
    )
  }
}

const service = new Service()
export default service;
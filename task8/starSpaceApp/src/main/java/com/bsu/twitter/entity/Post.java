package com.bsu.twitter.entity;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class Post {

    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private List<String> hashTags;
    private String photoLink;
    private List<String> likes;

    public Post(){
        this.id = "";
        this.description = "";
        this.author = "";
        this.photoLink = "";
        this.hashTags = new ArrayList<>();
        this.likes = new ArrayList<>();
    }

    public Post(String id, String description, Date createdAt, String author, List<String> hashTags, String photoLink, List<String> likes){
        this.id = id;
        this.description = description;
        this.createdAt = new Date();
        this.author = author;
        this.hashTags = new ArrayList<>(hashTags);
        this.photoLink = photoLink;
        this.likes = new ArrayList<>(likes);
    }


    public String getId(){ return id; }

    public String getDescription(){
        return description;
    }

    public Date getCreatedAt(){
        return createdAt;
    }

    public String getAuthor(){
        return author;
    }

    public List<String> getHashTags(){
        return hashTags;
    }

    public String getPhotoLink(){
        return photoLink;
    }

    public List<String> getLikes(){
        return likes;
    }


    public void setId(String id){
        this.id = id;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setCreatedAt(Date createdAt){
        this.createdAt = createdAt;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public void setHashTags(List<String> hashTags){
        this.hashTags = hashTags;
    }

    public void setPhotoLink(String photoLink){
        this.photoLink = photoLink;
    }

    public void setLikes(List<String> likes){
        this.likes = likes;
    }

}

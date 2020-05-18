package com.bsu.twitter.entity;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class Posts {

    private List<Post> posts;

    public Posts(){

        posts = new ArrayList<>();

        List<String> hashTags = new ArrayList<>();
        List<String> likes = new ArrayList<>();

        hashTags.add("Stars");
        hashTags.add("Happiness");
        hashTags.add("beauty");
        likes.add("Polina Dunaeva");
        likes.add("Nekto");
        likes.add("Anya Romanova");

        this.addPost(new Post("1", "Hi everyone!", new Date(), "Nekto GoOdd",
                hashTags,"photoLink1", likes));

        this.addPost(new Post("2", "Goodbye to All!", new Date(), "Anya Romanova",
                hashTags,"photoLink2", likes));

        this.addPost(new Post("3", "Ты лучший!", new Date(), "Polina Dunaeva",
                hashTags,"photoLink3", likes));
    }


    public boolean isValidate(Post post){

        if (post.getId() == null || post.getId().length() < 1) {return false;}
        if (post.getAuthor() == null || post.getAuthor().length() < 1) {return false;}
        if (post.getCreatedAt() == null) {return false;}
        if (post.getDescription() == null || post.getDescription().length() > 250) {return false;}
        else return true;
    }


    public Post getPost(String id){
        for(Post post: posts) { if(post.getId().equals(id)) { return post; } }
        return null;
    }

    public boolean addPost(Post postAdd){

        for(Post post: posts) { if(post.getId().equals(postAdd.getId())) { return false; } }
        if(isValidate(postAdd)) { posts.add(postAdd); return true; }
        return false;
    }

    public boolean editPost(String id, Post post){

        Post postEdit = this.getPost(id);

        if(post.getDescription() != null) {postEdit.setDescription(post.getDescription());}
        if(post.getPhotoLink() != null) {postEdit.setPhotoLink(post.getPhotoLink());}
        if(post.getHashTags() != null) {postEdit.setHashTags(post.getHashTags());}
        return isValidate(postEdit);
    }

    public boolean removePost(String id){
        for (Post post: posts){ if (post.getId().equals(id)) { posts.remove(post); return true; } }
        return false;
    }

    public List<Post> getAllPosts() {
        return posts;
    }


    public List<Post> addAllPosts(List<Post> posts){

        List<Post> invalidPosts = new ArrayList<Post>();
        for(Post post: posts) {
            if(isValidate(post)) { this.posts.add(post); }
            else { invalidPosts.add(post); }
        }
        return invalidPosts;
    }

    public void removeAllPosts() {
        posts.clear();
    }
}


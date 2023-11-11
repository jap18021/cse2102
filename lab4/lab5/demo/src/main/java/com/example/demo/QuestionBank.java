package com.example.demo;

import java.util.UUID;
import java.util.ArrayList;
import java.util.List;

public class QuestionBank {
    private List<Question> questions;

    public QuestionBank() {
        this.questions = new ArrayList<>();

        Question question1 = new Question(UUID.randomUUID(), "CSE 2102 is one of the classes of all time.", true);
        Question question2 = new Question(UUID.randomUUID(), "Thymeleaf was created by the Sumerian God Anu.", false);
        Question question3 = new Question(UUID.randomUUID(), "Java is cool", true);
        
        questions.add(question1);
        questions.add(question2);
        questions.add(question3);
    }

    public List<Question> getQuestions() {
        return questions;
    }
}
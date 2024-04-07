import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Category {
  name: string;
  icon: string;
  progress: number;
  id: number;
}

@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.css']
})
export class CategoryScreenComponent {
  categories: Category[] = [
    {
      name: 'Anatomia',
      icon: './assets/anatomia.png',
      progress: 5,
      id: 1
    },
    {
      name: 'Fisiologia',
      icon: './assets/Fisiologia.png',
      progress: 50,
      id: 2
    },
    {
      name: 'Patologia',
      icon: './assets/Patologia.jpeg',
      progress: 50,
      id: 3
    },
    {
      name: 'Neurociência',
      icon: './assets/Neurociencia.png',
      progress: 0,
      id: 4
    },
    {
      name: 'Farmacologia',
      icon: './assets/farmacologia.png',
      progress: 0,
      id: 5
    },
    {
      name: 'Microbiologia',
      icon: './assets/microbiologia.png',
      progress: 0,
      id: 6
    },
    {
      name: 'Epidemiologia',
      icon: './assets/epidemologia.png',
      progress: 0,
      id: 7
    },
    {
      name: 'Cirurgia',
      icon: './assets/cirurgia.png',
      progress: 0,
      id: 8
    },
  ];

  answers: { categoryID: number, isCorrect: boolean }[] = [];

  totalQuestions: number = 10; // Defina o número total de questões em uma categoria

  constructor(private router: Router) {}

  startCategory(category: Category) {
    this.router.navigate(['quiz', category.id]);
  }

  submitAnswer(category: Category, isCorrect: boolean) {
    this.answers.push({ categoryID: category.id, isCorrect: isCorrect });

    const categoryAnswers = this.answers.filter(answer => answer.categoryID === category.id);
    const correctAnswers = categoryAnswers.filter(answer => answer.isCorrect);

    if (categoryAnswers.length === this.totalQuestions) {
      category.progress = 100;
    } else {
      category.progress = (correctAnswers.length / categoryAnswers.length) * 100;
    }
  }

  getCategoryProgress(category: Category) {
    return category.progress;
  }
}

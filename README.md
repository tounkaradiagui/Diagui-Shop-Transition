# Diagui-Shop-Transition
# 🛍️ E-Commerce Mobile App (v2)

Une application mobile e-commerce moderne développée avec **Expo (TypeScript)**, **Node.js**, **Clerk Auth**, et **Neon Database**, conçue pour offrir une expérience fluide, rapide et sécurisée.

---

## 🚀 Stack Technique

| Côté Client (Frontend)       | Côté Serveur (Backend)       |
|-----------------------------|------------------------------|
| Expo (React Native)         | Node.js (Express)            |
| JavaScript                  | Supabase (Database)          |
| Clerk Authentication        | Prisma ORM (optionnel)       |
| Axios                       | REST API / JSON              |
| TanStack Query              |                              |

---

## 📱 Fonctionnalités prévues

### Frontend (Expo)
- [x] Authentification sécurisée via Clerk (inscription, login, logout)
- [ ] Affichage des produits (catalogue)
- [ ] Recherche et filtres dynamiques
- [ ] Gestion du panier
- [ ] Paiement (Stripe ou autre)
- [ ] Historique de commandes
- [ ] Profil utilisateur

### Backend (Node.js + Neon)
- [x] API RESTful pour les produits, utilisateurs, commandes
- [ ] Auth middleware avec Clerk JWT
- [ ] Connexion à Neon (PostgreSQL)
- [ ] Sécurisation des endpoints (CRUD)
- [ ] Webhooks (paiement / confirmation)

---

## ⚙️ Installation locale

### Prérequis
- Node.js ≥ 18
- Expo CLI
- Neon Database (PostgreSQL)
- Clerk project (clé API)

### 1. Cloner le projet

```bash
git clone https://github.com/tounkaradiagui/Diagui-Shop-Transition
cd Diagui-Shop-Transition


📦 Packages principaux
    Frontend :

        expo, react-native

        axios, @tanstack/react-query

        @clerk/clerk-expo

        react-navigation

    Backend :

        express, cors

        pg ou prisma

        dotenv, jsonwebtoken

✍️ Auteur
    Développé par [Diagui Tounkara]
    📧 Contact : [tounkaradiagui@gmail.com]
    🌐 [devdiagui.com]

📜 Licence
    Ce projet est sous licence MIT.
    Libre à vous de le forker, modifier ou contribuer !

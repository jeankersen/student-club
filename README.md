# Club Étudiant

Site React pour le club étudiant avec Docker + Nginx

---

## 📁 Structure

- `src/pages` : toutes les pages React
- `src/App.jsx` : routes
- `Dockerfile` + `nginx.conf` : build et container Docker

---

##  Lancer le projet

### Avec Docker

1. Assurez-vous que **Docker est installé** sur votre machine.
bash ```
 2. Build de l’image Docker :
exit

 docker build -t club-etudiant .


# 3. Lancer le container Docker :
docker run -p 3000:80 club-etudiant 

# 4. Accéder au site dans votre navigateur :
http://localhost:3000 


### ***Option 1 : Sans Docker***

Assurez-vous que Node.js >= 20 et npm sont installés.

Cloner le dépôt :

git clone https://github.com/TON_UTILISATEUR/club-etudiant.git
cd club-etudiant 


Installer les dépendances :

npm install 


Lancer le serveur de développement :

npm run dev 


Accéder au site dans votre navigateur :

http://localhost:5173

---





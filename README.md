# Club Étudiant

Site React pour le club étudiant avec Docker + Nginx

---

##  Structure

- `src/pages` : toutes les pages React
- `src/App.jsx` : routes
- `Dockerfile` + `nginx.conf` : build et container Docker

---

##  Lancer le projet

### Avec Docker

1. Assurez-vous que **Docker est installé** sur votre machine.

``` bash
 # 2. Build de l’image Docker :
docker build -t club-etudiant .

# 3. Lancer le container Docker :
docker run -p 3000:80 club-etudiant
``` 
4. Accéder au site dans votre navigateur :
http://localhost:3000
```


### Sans Docker

1. Assurez-vous que Node.js >= 20 et npm sont installés.

``` bash
# 2. Cloner le dépôt :
git clone https://github.com/TON_UTILISATEUR/club-etudiant.git
cd club-etudiant 

# 3. Installer les dépendances :
npm install 

# 4. Lancer le serveur de développement :
npm run dev
```
5. Accéder au site dans votre navigateur :
http://localhost:5173

---





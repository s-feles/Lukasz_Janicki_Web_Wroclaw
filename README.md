# React + TypeScript + Vite

## [EN]

### To run this app locally

1. Make sure you have the proper packages installed. Run `npm install` just in case.
2. Run `npm run dev` in your command line from the root directory of the repository.
3. Navigate to `localhost:<PORT>` in your browser, where `<PORT>` should be displayed in the terminal once the app is up. 

### Design and implementation choices
This app uses React Router to manage navigation through subpages such as `cart` or `checkout`. It's a decent compromise between the single-page architecture usually found in React apps and the model-view-controller with routing approach found in some Express.js apps.

Instead of classic CSS, I opted to use Tailwind for its ease of styling each component inline. Tailwind still does allow classic CSS to be used in place of its utility classes, though this has not come up for me yet.

The product list is static, as provided by the recruiters. The cart is handled by a context provider. If the app were to grow larger, the cart would be managed by an external state library and the static products list would be replaced by a database interface. Such interface could also track orders and registered users and their data, which would also come in handy for generating order numbers (here, for showcase purposes, every order has number 1).

## [PL]

### Aby uruchomić tę aplikację lokalnie

1. Upewnij się, że wszystkie potrzebne pakiety są zainstalowane (uruchom `npm install` z wiersza poleceń).
2. Uruchom `npm run dev` z poziomu korzenia repozytorium w wierszu poleceń.
3. Przejdź do `localhost:<PORT>` w swojej przeglądarce, gdzie `<PORT>` jest numerem portu, który powinien wyświetlić się po uruchomieniu aplikacji.

### Decyzje projektowe i implementacyjne
Ta aplikacja używa React Router do nawigowania między podstronami jak np. `cart` (koszyk) albo `checkout` (podsumowanie). Jest to sensowny kompromis pomiędzy jednostronową architekturą zazwyczaj znajdowaną w aplikacjach Reactowych oraz podejściem *model-view-controller* z routingiem znajdowanym w niektórych aplikacjach Express.js.

Zamiast klasycznego CSSa ta aplikacja wykorzystuje Tailwind ze względu na przystępność stylizacji każdego komponentu w jednej linii. Tailwind nadal zezwala na użycie klasycznego CSSa w miejsce swoich klas, do teraz jeszcze nie uznałem tego za konieczne.

Lista produktów jest statyczna, tak jak została podana w pliku przez rekruterów. Koszyk jest obsługiwany przez kontekst. Gdyby aplikacja miała się rozrosnąć, koszyk byłby zarządzany przez zewnętrzną bibliotekę stanową, a statyczna lista produktów zostałaby zastąpiona interfejsem bazy danych. Taka baza przechowywałaby również dane o złożonych zamówieniach i/lub zarejestrowanych użytkownikach. Automatycznie obsługiwałaby ona również generowanie kolejnych numerów zamówień (tutaj, ze względów pokazowych, każde zamówienie ma numer 1).
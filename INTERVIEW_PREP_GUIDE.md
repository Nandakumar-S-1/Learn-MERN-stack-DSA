# RENTEASE INTERVIEW PREPARATION GUIDE

This guide provides a clear, plain-text explanation of the key technical concepts and architectural decisions in the RentEase project.

## 1. SOLID Principles in RentEase

| Principle | Explanation | Example in Code |
| :--- | :--- | :--- |
| **SRP (Single Responsibility)** | Each class has one reason to change. | `VerifyOtpUseCase` only handles OTP verification. `UserPersistenceMapper` only translates data. |
| **OCP (Open/Closed)** | Classes are open for extension, closed for modification. | `BaseRoute` allows adding new routes without changing the base logic. Enums for roles/status. |
| **LSP (Liskov Substitution)** | Objects of a superclass should be replaceable with objects of its subclasses. | `UserRepository` can be used wherever `IUserRepository` is expected. |
| **ISP (Interface Segregation)** | No client should be forced to depend on methods it does not use. | Small interfaces like `IMailService`, `IOtpService`, `IJwtService` instead of one "GlobalService". |
| **DIP (Dependency Inversion)** | Depend on abstractions (interfaces), not concretions (classes). | `Create_User_Usecase` depends on `IUserRepository` interface, not the concrete Prisma repo. |

## 2. OOP Pillars

- **Encapsulation**: Private members like `_userRepository` in UseCases and private methods like `_createAccessToken` in `JwtService`.
- **Abstraction**: Interfaces like `IBaseRepository` define the "what" without exposing the "how" (Prisma implementation).
- **Inheritance**: `UserRoutes` extending `BaseRoute`, or `UserRepository` extending a base repository class.
- **Polymorphism**: The `execute` method in different UseCases behaves differently but adheres to the same interface.

## 3. Core Infrastructure

### Access & Refresh Tokens
- **Access Token**: Short-lived (e.g., 15m). Stored in `localStorage` and sent in the `Authorization` header.
- **Refresh Token**: Long-lived. Stored in `localStorage`.
- **Flow**: When the Access Token expires (401 error), the client's Axios interceptor automatically calls the `/refresh-token` endpoint. The server validates the rotate token and issues a new pair.

### Redis
- **Usage**: Used for temporary storage of OTPs (with TTL), rate-limiting OTP attempts, and storing "pending" user data during registration.
- **Benefit**: Fast, memory-resident, and handles expiration automatically.

### Redux & LocalStorage
- **Redux**: Manages global UI state (user profile, auth status). Updates the UI instantly when data changes.
- **LocalStorage**: Persists the session across page refreshes. When the app starts, it initializes the Redux state from LocalStorage.

### Cloudinary
- **Usage**: Used for storing media files, specifically owner verification documents.
- **Service**: Implemented in `cloudinary.service.ts` to handle secure uploads and return URLs.

### Zod Validation
- **Usage**: schemas defined in `auth.validators.ts`.
- **Flow**: The `validationRequestMiddleware` uses these schemas to validate `req.body` before it even reaches the Controller.

## 4. Architectural Summary
The project follows **Clean Architecture**:
- **Presentation**: Routes, Controllers, Middlewares.
- **Application**: UseCases, DTOs, Mappers.
- **Core**: Domain Entities, Repository Interfaces.
- **Infrastructure**: Concrete Repositories (Prisma), External Services (Redis, Cloudinary, Mail).

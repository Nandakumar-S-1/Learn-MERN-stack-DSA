# Project Architecture and Implementation Explanation

This document provides a detailed breakdown of the RentEase project architecture, how APIs flow through the layers, and examples of OOP and SOLID principles found in the codebase.

## 1. API Flow: Frontend to Backend Response

In RentEase, an API call follows a structured path through several layers. This ensures separation of concerns and maintainability.

### The Flow
1.  **Frontend (Client side):**
    *   A component (e.g., `RegisterForm.tsx`) triggers an API call using a service or directly via `axios`/`fetch`.
    *   The request is sent to the backend URL (e.g., `POST /api/v1/auth/register`).

2.  **Route (Presentation Layer):**
    *   The request arrives at the backend. Express routes (e.g., in `user.routes.ts`) match the URL and method.
    *   The route directs the request to a specific **Controller** method.

3.  **Controller (Presentation Layer):**
    *   The Controller (e.g., `UserRegisterController`) extracts data from `req.body`.
    *   It calls the **Use Case**'s `execute` method. The Controller doesn't know *how* to register a user; it just knows which use case to call.
    *   It returns a formatted `ApiResponseDTO` to the client.

4.  **Use Case (Application Layer):**
    *   The Use Case (e.g., `CreateUserUseCase`) contains the **Business Logic**.
    *   It may use a **Mapper** to convert raw data into a **Domain Entity**.
    *   It interacts with a **Repository** (via an interface) to save data.

5.  **Repository (Infrastructure Layer):**
    *   The Repository (e.g., `UserRepository`) interacts with the database (using **Prisma**).
    *   It saves the data and returns the result, often mapped back to a Domain Entity.

6.  **Response:**
    *   The flow reverses: Repository -> Use Case -> Controller -> Frontend.

---

## 2. Adding a New API: Find Users starting with 'A'

To add an API that finds users whose names start with a specific letter (e.g., 'A'), you would modify/add the following:

| Layer | File to Add/Modify | Action |
| :--- | :--- | :--- |
| **Presentation** | `user.routes.ts` | Add a new route: `GET /api/v1/users/search?prefix=a` |
| **Presentation** | `UserController.ts` | Create a controller method `searchUsers` to handle the request. |
| **Application** | `IGetUsersByPrefixUseCase.ts` | Define the interface for the new use case. |
| **Application** | `GetUsersByPrefix.usecase.ts` | Implement the business logic (calling the repository). |
| **Core** | `IUserRepository.ts` | Add `findByNamePrefix(prefix: string): Promise<UserEntity[]>` to the interface. |
| **Infrastructure** | `UserRepository.ts` | Implement `findByNamePrefix` using `prisma.user.findMany({ where: { fullName: { startsWith: prefix } } })`. |

---

## 3. Four Pillars of OOP in RentEase

## 3. Four Pillars of OOP in RentEase

For each pillar, here are 5 examples/places in your project:

### 1. Encapsulation
1.  **`UserEntity`** (`Core/Entities/user.entity.ts`): Keeps user properties and their logic together.
2.  **`UserRepository`** (`Infrastructure/Repositories/UserRepository.ts`): Hides the Prisma queries inside the class methods.
3.  **`UserRegisterController`** (`Presentation/Controllers/Authentication/Register_user.controller.ts`): Keeps the `createUser` dependency as a private member.
4.  **`AuthMiddleware`**: Hides the logic of token verification from the routes.
5.  **`BaseRepository`** (`Infrastructure/Repositories/Base/BaseRepository.ts`): Uses `protected` properties like `model` and `mapper` so they are only accessible to subclasses.

### 2. Inheritance
1.  **`BaseRepository`**: An abstract class that provides base functionality to other repositories.
2.  **`IUserRepository`** (`Core/Interfaces/IUserRepository.ts`): Extends `IBaseRepository`.
3.  **Custom Errors**: Classes like `AuthError` (if present) often extend the built-in `Error` class.
4.  **Prisma Models**: Generated models often inherit from base types.
5.  **Repository Implementations**: `UserRepository` follows the structure defined by its parent interfaces/abstract classes.

### 3. Polymorphism
1.  **Interface Injection**: `UserRegisterController` takes `ICreateUserUseCase`. Any implementation of this interface will work.
2.  **UseCase execution**: Different use cases (`CreateUser`, `VerifyOtp`) all implement an `execute` method but perform different actions.
3.  **Generic Repositories**: `BaseRepository<T>` works with any entity type `T`.
4.  **Error Handling**: The `catch (error: unknown)` block in controllers handles different types of errors polymorphically.
5.  **Repository mocking**: In tests, you can pass a Mock Repository instead of the real `UserRepository`.

### 4. Abstraction
1.  **`IUserRepository`**: Defines the contract for user data access.
2.  **`ICreateUserUseCase`**: Defines what a registration use case should look like.
3.  **`IMailService`**: An abstraction for sending emails (could be SendGrid, NodeMailer, etc.).
4.  **`ApiResponseDTO`**: An abstraction of the response structure sent to the client.
5.  **`prisma` client**: Abstraction over the raw SQL database.

---

## 4. SOLID Principles in RentEase

### 1. Single Responsibility Principle (SRP)
1.  **`UserPersistenceMapper`**: Responsible only for translating data between DB and Domain.
2.  **`Register_user.controller.ts`**: Responsible only for handling the HTTP request and response.
3.  **`CreateUser.usecase.ts`**: Responsible only for the business logic of creating a user.
4.  **`prisma.client.ts`**: Responsible only for initializing the database client.
5.  **`user.routes.ts`**: Responsible only for defining the URL paths for user actions.

### 2. Open/Closed Principle (OCP)
1.  **`IBaseRepository`**: Can be used to create new repository types without changing the base interface.
2.  **`Http_StatusCodes`**: Enums allow adding new status codes without breaking existing logic.
3.  **Route Modules**: You can add new route files (e.g., `rental.routes.ts`) without modifying `user.routes.ts`.
4.  **Middleware Chain**: You can add new middlewares to a route without changing the controller.
5.  **DTOs**: You can extend DTOs to add more fields without breaking existing ones.

### 3. Liskov Substitution Principle (LSP)
1.  **Use Case substitution**: `UserRegisterController` works perfectly with any class that implements `ICreateUserUseCase`.
2.  **Repository substitution**: Use cases depend on `IUserRepository`, so they can work with any DB implementation (Postgres, Mock, Mongo).
3.  **Interface implementation**: Classes like `UserRepository` fully fulfill the contract of `IUserRepository`.
4.  **Error objects**: Any child of `Error` can be treated as an `Error` in the catch blocks.
5.  **Service Interfaces**: `IMailService` implementations can be swapped without affecting the use case.

### 4. Interface Segregation Principle (ISP)
1.  **Small UseCase Interfaces**: Split into `ICreateUserUseCase`, `IVerifyOtpUseCase`, etc., instead of one big interface.
2.  **Distinct Repository Interfaces**: `IUserRepository` only contains user-related methods.
3.  **Service specific interfaces**: `IOtpService`, `IJwtService` are separate.
4.  **DTO segregation**: Different DTOs for Request and Response.
5.  **Middleware interfaces**: Each middleware handles one specific part of the request.

### 5. Dependency Inversion Principle (DIP)
1.  **Controller Injection**: `UserRegisterController` depends on `ICreateUserUseCase` (interface), not the concrete class.
2.  **UseCase Injection**: UseCases depend on repository interfaces (e.g., `IUserRepository`).
3.  **Inversion of Control (IoC)**: Using `tsyringe` to manage dependencies.
4.  **Infrastructure depending on Core**: `UserRepository` depends on `UserEntity` and `IUserRepository`.
5.  **Frontend Services**: Client-side services often depend on abstractions for data fetching.

---

## 5. DiscountService Refactor (S, O, L)

### Original Code
```typescript
class DiscountService {
  calculate(type: string, amount: number): number {
    if (type === "STUDENT") return amount * 0.2;
    if (type === "SENIOR") return amount * 0.3;
    if (type === "EMPLOYEE") return amount * 0.25;
    return 0;
  }
}
```

### Refactored Code (Applying S, O, L)

```typescript
// 1. Abstraction (ISP & LSP)
interface IDiscountStrategy {
  calculate(amount: number): number;
}

// 2. Concrete Strategies (SRP)
class StudentDiscount implements IDiscountStrategy {
  calculate(amount: number): number { return amount * 0.2; }
}

class SeniorDiscount implements IDiscountStrategy {
  calculate(amount: number): number { return amount * 0.3; }
}

class EmployeeDiscount implements IDiscountStrategy {
  calculate(amount: number): number { return amount * 0.25; }
}

// 3. Discount Service (OCP & DIP)
class DiscountService {
  private strategies: Map<string, IDiscountStrategy> = new Map();

  constructor() {
    this.strategies.set("STUDENT", new StudentDiscount());
    this.strategies.set("SENIOR", new SeniorDiscount());
    this.strategies.set("EMPLOYEE", new EmployeeDiscount());
  }

  calculate(type: string, amount: number): number {
    const strategy = this.strategies.get(type);
    return strategy ? strategy.calculate(amount) : 0;
  }
}
```

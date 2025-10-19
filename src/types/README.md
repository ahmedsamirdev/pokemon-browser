# Types Organization Best Practices

## 📁 **Recommended Type Organization:**

```
src/types/
├── pokemon.ts          # Domain-specific types (Pokemon data)
├── props.ts            # Component Props types
├── hook-types.ts       # Hook type definitions
├── api.ts              # API function types
├── common.ts           # Common/shared types
└── index.ts            # Centralized exports
```

## 🎯 **Type Categories:**

### **1. Domain Types (`pokemon.ts`)**

- Business logic types
- API response types
- Domain-specific interfaces

### **2. Props Types (`props.ts`)**

- Component prop interfaces
- UI-related types
- Component state types

### **3. Hook Types (`hook-types.ts`)**

- Hook parameter type definitions
- Hook return type definitions
- Hook-related interfaces

### **4. API Types (`api.ts`)**

- API function signatures
- API error types
- Request/response types

### **5. Common Types (`common.ts`)**

- Shared utility types
- Generic types used across the app
- Base interfaces

## ✅ **Best Practices:**

1. **Single Responsibility**: Each file has one clear purpose
2. **Descriptive Names**: File names clearly indicate content
3. **Centralized Exports**: All types exported via index.ts
4. **Type-only Imports**: Use `import type` for type imports
5. **No Duplication**: Avoid duplicate type definitions

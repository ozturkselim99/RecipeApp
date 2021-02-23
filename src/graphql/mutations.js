/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      title
      description
      image
      steps {
        items {
          id
          description
          images
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
        id
        title
        image
        recipe {
          nextToken
        }
        createdAt
        updatedAt
      }
      country {
        id
        flag
        name
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      title
      description
      image
      steps {
        items {
          id
          description
          images
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
        id
        title
        image
        recipe {
          nextToken
        }
        createdAt
        updatedAt
      }
      country {
        id
        flag
        name
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      title
      description
      image
      steps {
        items {
          id
          description
          images
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
        id
        title
        image
        recipe {
          nextToken
        }
        createdAt
        updatedAt
      }
      country {
        id
        flag
        name
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStep = /* GraphQL */ `
  mutation CreateStep(
    $input: CreateStepInput!
    $condition: ModelStepConditionInput
  ) {
    createStep(input: $input, condition: $condition) {
      id
      description
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      images
      createdAt
      updatedAt
    }
  }
`;
export const updateStep = /* GraphQL */ `
  mutation UpdateStep(
    $input: UpdateStepInput!
    $condition: ModelStepConditionInput
  ) {
    updateStep(input: $input, condition: $condition) {
      id
      description
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      images
      createdAt
      updatedAt
    }
  }
`;
export const deleteStep = /* GraphQL */ `
  mutation DeleteStep(
    $input: DeleteStepInput!
    $condition: ModelStepConditionInput
  ) {
    deleteStep(input: $input, condition: $condition) {
      id
      description
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      images
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      image
      recipe {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      image
      recipe {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      image
      recipe {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
      id
      flag
      name
      recipes {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
      id
      flag
      name
      recipes {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
      id
      flag
      name
      recipes {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      fullname
      avatar
      recipes {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      fullname
      avatar
      recipes {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      fullname
      avatar
      recipes {
        items {
          id
          title
          description
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

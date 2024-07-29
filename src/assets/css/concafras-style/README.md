Como criar um `Path Aliases` para uso global

### 1. Configurar `Path Aliases` no TypeScript

No arquivo `tsconfig.json`, você deve configurar os aliases corretamente. A configuração abaixo pressupõe que os arquivos LESS estão localizados em `src/assets/css/concafras-style`.

#### `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@styles/*": ["assets/css/concafras-style/*"]
    }
  }
}
```

### 2. Configurar `stylePreprocessorOptions` no `angular.json`

No arquivo `angular.json`, você deve configurar o caminho correto para o pré-processador de estilos (LESS).

#### `angular.json`:

```json
{
  "projects": {
    "your-project-name": {
      "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/assets/css/concafras-style"
              ]
            }
          }
        }
      }
    }
  }
}
```

### 3. Usar os Aliases nas Importações LESS

Após configurar os aliases, você pode usar os aliases nas suas importações LESS.

#### Arquivo LESS:

```less
@import "@styles/_global.less";
```

### Passos Detalhados:

1. **Verifique a Estrutura do Projeto**:
  - Certifique-se de que o arquivo `_global.less` está realmente localizado em `src/assets/css/concafras-style`.

2. **Verifique o Nome do Projeto**:
  - No arquivo `angular.json`, certifique-se de que `your-project-name` corresponde ao nome real do seu projeto Angular.

3. **Reinicie o Servidor de Desenvolvimento**:
  - Após fazer essas alterações, reinicie o servidor de desenvolvimento do Angular para garantir que as novas configurações sejam aplicadas.

### Verificação Completa

Aqui está um exemplo completo com todos os passos necessários:

#### Estrutura do Projeto:

```
src/
  assets/
    css/
      concafras-style/
        _global.less
  app/
    pages/
      components/
        title-page/
          title-page.component.less
```

#### `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@styles/*": ["assets/css/concafras-style/*"]
    }
  }
}
```

#### `angular.json`:

```json
{
  "projects": {
    "your-project-name": {
      "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/assets/css/concafras-style"
              ]
            }
          }
        }
      }
    }
  }
}
```

#### Arquivo LESS (`title-page.component.less`):

```less
@import "@styles/_global.less";
```

### Reiniciar o Servidor

Após fazer essas alterações, reinicie o servidor de desenvolvimento Angular:

```bash
ng serve
```

Se ainda estiver enfrentando problemas, verifique os seguintes pontos:

- **Caminho Absoluto vs Relativo**: Certifique-se de que os caminhos configurados no `tsconfig.json` e `angular.json` são relativos à raiz do projeto.
- **Erros de Tipagem**: Verifique se há erros de digitação nos nomes dos arquivos e caminhos.
- **Reinicialização do Editor**: Em alguns casos, pode ser necessário reiniciar o editor de código ou a IDE para que ele reconheça as novas configurações.

Seguindo esses passos, você deve conseguir simplificar os caminhos de importação no seu projeto Angular.

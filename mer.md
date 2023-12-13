# Diagrama de Entidade Relacional (DER)

## Entidades:

### Receita
- ID (PK)
- Nome
- imagem
- Data de Criação
- Observações
- Video

### Material
- ID (PK)
- Nome
- Unidade de Medida
- Custo por Unidade
- Marca

### Item de Receita
- ID (PK)
- ID_Receita (FK referenciando Receita)
- ID_Material (FK referenciando Material)
- Quantidade
- ...

### ListaCompra
- ID (PK)
- Data de Criação
- ...

### ItemListaCompra
- ID (PK)
- ID_ListaCompra (FK referenciando ListaCompra)
- ID_Material (FK referenciando Material)
- Quantidade
- Valor
- ...

## Relacionamentos:

- Receita (1) ----< (M) Item de Receita
- Material (1) ----< (M) Item de Receita
- ListaCompra (1) ----< (M) ItemListaCompra
- Material (1) ----< (M) ItemListaCompra

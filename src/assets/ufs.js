console.log("UFS!")

export function getUfs() {
  return [
    {
      label: "Todos", value: "", slug: "br"
    },
    {
      label: "Acre", value: "AC", slug: "acre"
    },
    {
      label: "Alagoas", value: "AL", slug: "alagoas"
    },
    {
      label: "Amapá", value: "AP", slug: "amapa"
    },
    {
      label: "Amazonas", value: "AM", slug: "amazonas"
    },
    {
      label: "Bahia", value: "BA", slug: "bahia"
    },
    {
      label: "Ceará", value: "CE", slug: "ceara"
    },
    {
      label: "Distrito Federal", value: "DF", slug: "distrito-federal"
    },
    {
      label: "Espírito Santo", value: "ES", slug: "espirito-santo"
    },
    {
      label: "Goiás", value: "GO", slug: "goias"
    },
    {
      label: "Maranhão", value: "MA", slug: "maranhao"
    },
    {
      label: "Mato Grosso", value: "MT", slug: "mato-grosso"
    },
    {
      label: "Mato Grosso do Sul", value: "MS", slug: "mato-grosso-do-sul"
    },
    {
      label: "Minas Gerais", value: "MG", slug: "minas-gerais"
    },
    {
      label: "Paraná", value: "PR", slug: "parana"
    },
    {
      label: "Paraíba", value: "PB", slug: "paraiba"
    },
    {
      label: "Paraná", value: "PA", slug: "parana"
    },
    {
      label: "Pernambuco", value: "PE", slug: "pernambuco"
    },
    {
      label: "Piauí", value: "PI", slug: "piaui"
    },
    {
      label: "Rio Grande do Norte", value: "RN", slug: "rio-grande-do-norte"
    },
    {
      label: "Rio Grande do Sul", value: "RS", slug: "rio-grande-do-sul"
    },
    {
      label: "Rio de Janeiro", value: "RJ", slug: "rio-de-janeiro"
    },
    {
      label: "Rondânia", value: "RO", slug: "rondonia"
    },
    {
      label: "Roraima", value: "RR", slug: "roraima"
    },
    {
      label: "Santa Catarina", value: "SC", slug: "santa-catarina"
    },
    {
      label: "Sergipe", value: "SE", slug: "sergipe"
    },
    {
      label: "São Paulo", value: "SP", slug: "sao-paulo"
    },
    {
      label: "Tocantins", value: "TO", slug: "tocantins"
    }];
}

export const getUfBySlug = (slugUF) => {
   const uf = getUfs().filter(uf => uf.slug === slugUF);
  return uf.length > 0 ? uf[0] : getUfs()[0] ;
}


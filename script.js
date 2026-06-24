// === ESTADO DO SISTEMA ===
let isLogado = false; 
let carrinho = [];

// === 1. BANCO DE DADOS ===
const menuCompleto = [
  { id: 1, categoria: "Café da Manhã", subcat: "Cuscuz", nome: "Cuscuz Simples com Manteiga", preco: 10.00, desc: "Cuscuz no vapor regado com manteiga de garrafa que derrete na boca.", lojas: ["recife", "salvador", "fortaleza", "caruaru"], imagem: "https://receitasdepanela.com.br/wp-content/uploads/2026/01/como-fazer-cuscuz-fofinho-na-cuscuzeira-1024x576.webp" },
  { id: 2, categoria: "Café da Manhã", subcat: "Tapioca", nome: "Tapioca Rendada de Queijo", preco: 15.00, desc: "Goma fininha com crosta de queijo coalho por fora e derretido por dentro.", lojas: ["recife", "salvador", "fortaleza", "caruaru"], imagem: "https://conteudo.imguol.com.br/c/entretenimento/e0/2020/10/30/tapioca-rendada-feita-por-ana-maria-braga-1604062864178_v2_900x506.jpg" },
  { id: 3, categoria: "Café da Manhã", subcat: "Combo", nome: "Banquete da Manhã Sertaneja", preco: 35.00, desc: "Cuscuz, ovos mexidos, banana da terra fritinha, queijo coalho e café coado.", lojas: ["recife"], imagem: "https://vejario.abril.com.br/wp-content/uploads/2025/11/Quiteria_Cafe-da-Manha_Credito-Verso-Conteudo-Criativo-4-1.jpg-1.jpg?quality=70&strip=info&w=720&crop=1" },
  { id: 4, categoria: "Pratos Principais", subcat: "Cuscuz", nome: "Cuscuz de Sol do Seu Zé", preco: 22.00, desc: "Generosa porção de carne de sol acebolada e fatias de queijo coalho.", lojas: ["recife", "salvador", "fortaleza", "caruaru"], imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYrKUP4LCwxnx_GBfhp51cfmXGDBg9kiYM8-MjN5dFywQKSM2AaDQ0wcf&s=10" },
  { id: 5, categoria: "Pratos Principais", subcat: "Tapioca", nome: "Tapioca de Sol da Mainha", preco: 24.00, desc: "Abraçando carne de sol desfiada e nata fresca cremosa.", lojas: ["recife", "salvador", "fortaleza"], imagem: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/151d02e7fb94d8a4df14177cdeb08e41.webp?itok=mEaX7N5Z" },
  { id: 6, categoria: "Pratos Principais", subcat: "Prato Quente", nome: "Baião Festivo da Família", preco: 45.00, desc: "Feijão de corda com arroz, queijo coalho em cubos e picanha de sol.", lojas: ["recife", "caruaru"], imagem: "https://www.estadao.com.br/resizer/v2/D4QX24LJMNB3ZINUPJYBJANZ4E.jpg?quality=80&auth=41037a7b5cbad76248b2ffb11726830b37e8caabfb9a7d389a289b741f05a86c&width=720&height=410&focal=472,541" },
  { id: 7, categoria: "Pratos Principais", subcat: "Prato Quente", nome: "Escondidinho Aconchego", preco: 38.00, desc: "Purê de macaxeira aveludado, recheado com charque e gratinado ao forno.", lojas: ["recife", "caruaru"], imagem: "https://s2.glbimg.com/BsH7ICpQ5F6jMD97E6wQjf9XWq8=/620x455/e.glbimg.com/og/ed/f/original/2020/08/10/escondidinho.jpg" },
  { id: 8, categoria: "Pratos Principais", subcat: "Litoral", nome: "Caldinho Praiano de Sururu", preco: 18.00, desc: "Caldo forte com leite de coco e azeite de dendê. Acompanha torrada.", lojas: ["recife", "fortaleza"], imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3xEdEii6iU-CbNv4PWNVrr9o6-N9Z8y3udKWlrtnGf5m61VgyEf9WaI&s=10" },
  { id: 9, categoria: "Bebidas", subcat: "Café", nome: "Café Coado de Sítio", preco: 6.00, desc: "Aquele café forte, passado na hora no coador de pano.", lojas: ["recife", "salvador", "caruaru"], imagem: "https://www.estadao.com.br/resizer/v2/V4EMZB6BMFHRNGJUGCCGDW43UM.jpeg?quality=80&auth=acb41969f48b1eca876264cd1a9f9776346349f5d519972390e5b4c25f75a1c5&width=550&height=925&smart=true" },
  { id: 10, categoria: "Bebidas", subcat: "Café", nome: "Pingado Nordestino", preco: 8.00, desc: "Nosso tradicional café com leite quente e espumoso.", lojas: ["recife", "salvador", "caruaru"], imagem: "https://fourblackfaith.com.br/wp-content/uploads/2024/12/cafe_com_leite_espumado_e_canela.webp" },
  { id: 11, categoria: "Bebidas", subcat: "Café", nome: "Cappuccino com Rapadura", preco: 14.00, desc: "Expresso, leite vaporizado e lascas de rapadura derretida.", lojas: ["recife", "salvador"], imagem: "https://http2.mlstatic.com/D_NQ_NP_617528-MLB108965032219_032026-O.webp" },
  { id: 12, categoria: "Bebidas", subcat: "Suco", nome: "Refresco do Pomar (Cajá)", preco: 9.00, desc: "Polpa pura e azedinha de cajá. Perfeito para os dias quentes.", lojas: ["recife", "salvador", "fortaleza", "caruaru"], imagem: "https://guiadacozinha.com.br/wp-content/uploads/2024/03/Suco-de-caja.jpg" },
  { id: 13, categoria: "Bebidas", subcat: "Suco", nome: "Suco de Umbu com Hortelã", preco: 10.00, desc: "A acidez do umbu equilibrada com a refrescância da hortelã fresca.", lojas: ["recife", "fortaleza", "caruaru"], imagem: "https://vitat.com.br/receitas/images/recipeshandler.jpg?id=11217&tipo=r&default=s" },
  { id: 14, categoria: "Bebidas", subcat: "Suco", nome: "Graviola Nevada", preco: 12.00, desc: "Suco frozen de graviola cremosa batida com muito gelo.", lojas: ["recife", "salvador", "fortaleza"], imagem: "https://www.receiteria.com.br/wp-content/uploads/suco-de-graviola.png" },
  { id: 15, categoria: "Bebidas", subcat: "Drink", nome: "Caipirinha de Seriguela", preco: 22.00, desc: "Cachaça artesanal, seriguela fresca, açúcar e gelo.", lojas: ["recife", "salvador", "fortaleza"], imagem: "https://conteudo.imguol.com.br/67/2015/12/03/caiprinha-de-seriguela-1449149126931_300x400.jpg" },
  { id: 16, categoria: "Bebidas", subcat: "Drink", nome: "Gin Tônica c/ Caju e Alecrim", preco: 28.00, desc: "Clássico refrescante com toque regional de caju em compota.", lojas: ["recife", "salvador", "fortaleza"], imagem: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/12/19/caju-amigo-do-1h7zt6bb1k5eq.jpg" },
  { id: 17, categoria: "Bebidas", subcat: "Drink", nome: "Batida de Coco (A Favorita)", preco: 24.00, desc: "Leite de coco, cachaça branca envelhecida e leite condensado.", lojas: ["recife", "fortaleza", "caruaru"], imagem: "https://mapadacachaca.com.br/wp-content/uploads/2023/11/batida-de-coco-optimized.jpg" }
];

// === 2. NAVEGAÇÃO DE ABAS ===
function mudarAba(idAba) {
  document.querySelectorAll('.aba-conteudo').forEach(c => c.style.display = 'none');
  document.querySelectorAll('.aba-item').forEach(b => b.classList.remove('active'));

  document.getElementById(idAba).style.display = 'block';
  const botaoAtivo = document.querySelector(`.aba-item[data-target="${idAba}"]`);
  if (botaoAtivo) botaoAtivo.classList.add('active');
}

document.querySelectorAll('.aba-item').forEach(botao => {
  botao.addEventListener('click', function() { mudarAba(this.getAttribute('data-target')); });
});

// === 3. RENDERIZAR CARDÁPIO ===
document.querySelectorAll('.loja-item').forEach(lojaCard => {
  lojaCard.addEventListener('click', function() {
    const idLoja = this.getAttribute('data-loja');
    const nomeLoja = this.querySelector('h3').innerText;
    
    const produtosDaLoja = menuCompleto.filter(p => p.lojas.includes(idLoja));
    
    document.getElementById('aviso-sem-loja').style.display = 'none';
    document.getElementById('container-cardapio-ativo').style.display = 'block';
    document.getElementById('titulo-menu-loja').innerText = `Menu: ${nomeLoja}`;
    
    const grid = document.getElementById('grid-render-produtos');
    grid.innerHTML = ''; 
    
    const ordensCategorias = ["Café da Manhã", "Pratos Principais", "Bebidas"];

    ordensCategorias.forEach(categoriaAtiva => {
      const produtosNaCategoria = produtosDaLoja.filter(prod => prod.categoria === categoriaAtiva);
      
      if (produtosNaCategoria.length > 0) {
        grid.innerHTML += `<h3 class="titulo-categoria">${categoriaAtiva}</h3>`;
        produtosNaCategoria.forEach(prod => {
          const precoFormatado = prod.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          grid.innerHTML += `
            <article class="produto-card">
              <img src="${prod.imagem}" alt="${prod.nome}" class="img-produto" onerror="this.src='https://placehold.co/600x400/EAEAEA/888888?text=Sem+Foto'">
              <span class="tag-subcategoria">${prod.subcat}</span>
              <h3>${prod.nome}</h3>
              <p>${prod.desc}</p>
              <div class="produto-rodape">
                <span class="preco">${precoFormatado}</span>
                <button class="btn-clean btn-add" data-id="${prod.id}">Adicionar</button>
              </div>
            </article>
          `;
        });
      }
    });

    document.querySelectorAll('.btn-add').forEach(btn => {
      btn.addEventListener('click', function() { adicionarAoCarrinho(parseInt(this.getAttribute('data-id'))); });
    });

    mudarAba('Cardapio');
  });
});

// === 4. CARRINHO ===
function adicionarAoCarrinho(idProduto) {
  const produto = menuCompleto.find(p => p.id === idProduto);
  carrinho.push(produto);
  atualizarInterfaceCarrinho();
  
  const badge = document.getElementById('badge-carrinho');
  badge.style.transform = 'scale(1.3)';
  setTimeout(() => badge.style.transform = 'scale(1)', 200);
}

window.removerDoCarrinho = function(index) {
  carrinho.splice(index, 1);
  atualizarInterfaceCarrinho();
}

function atualizarInterfaceCarrinho() {
  const listaHtml = document.getElementById('lista-itens-carrinho');
  const badge = document.getElementById('badge-carrinho');
  
  badge.innerText = carrinho.length;
  badge.style.display = carrinho.length > 0 ? 'inline-block' : 'none';

  if (carrinho.length === 0) {
    document.getElementById('carrinho-vazio').style.display = 'block';
    document.getElementById('carrinho-cheio').style.display = 'none';
    return;
  }
  
  document.getElementById('carrinho-vazio').style.display = 'none';
  document.getElementById('carrinho-cheio').style.display = 'block';

  listaHtml.innerHTML = '';
  let subtotal = 0;

  carrinho.forEach((item, index) => {
    subtotal += item.preco;
    const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    listaHtml.innerHTML += `
      <div class="item-carrinho">
        <div class="item-carrinho-info">
          <h4>${item.nome}</h4>
          <span>${precoFormatado}</span>
        </div>
        <button class="btn-remover" onclick="removerDoCarrinho(${index})">🗑️</button>
      </div>
    `;
  });

  const valorSub = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById('valor-subtotal').innerText = valorSub;
  document.getElementById('valor-total').innerText = valorSub; 
}

const btnFinalizar = document.getElementById('btn-finalizar-pedido');
if(btnFinalizar){
  btnFinalizar.addEventListener('click', () => {
    if(!isLogado) {
      alert("🔒 Quase lá! Para finalizar o pedido e acumular pontos, precisamos que você acesse sua conta no Clube Raízes.");
      mudarAba('Fidelidade');
      return;
    }
    alert("✨ Pedido Finalizado com Sucesso! Seu momento de aconchego está sendo preparado.");
    carrinho = [];
    atualizarInterfaceCarrinho();
    mudarAba('Inicio');
  });
}

// === 5. MODAL LGPD (ABRE TODA VEZ QUE A PÁGINA RECARREGA) ===
const linkTermos = document.getElementById('link-termos');
const modalLgpd = document.getElementById('modal-lgpd');
const btnFecharModal = document.getElementById('btn-fechar-modal');
const btnEntendiModal = document.getElementById('btn-entendi-modal');

// Variável de controle: reseta sempre que a página é atualizada
let termoAceitoNestaSessao = false;

// ABRE O MODAL IMEDIATAMENTE ASSIM QUE O SITE CARREGA
if (modalLgpd) {
  modalLgpd.classList.add('ativo');
  if (btnFecharModal) btnFecharModal.style.display = 'none'; // Esconde o "X" para forçar o clique em "Entendi"
}

// ABRIR O MODAL PELO LINK DE TERMOS NA ABA CLUBE
if (linkTermos && modalLgpd) {
  linkTermos.addEventListener('click', function(e) {
    e.preventDefault();
    if (btnFecharModal) btnFecharModal.style.display = 'block'; // Mostra o "X" caso ele queira só reler depois
    modalLgpd.classList.add('ativo');
  });
}

function fecharModal() { 
  modalLgpd.classList.remove('ativo'); 
}

// AO CLICAR EM "ENTENDI E CONFIO", LIBERA A NAVEGAÇÃO
if (btnEntendiModal) {
  btnEntendiModal.addEventListener('click', () => {
    termoAceitoNestaSessao = true;
    fecharModal();
  });
}

if (btnFecharModal) btnFecharModal.addEventListener('click', fecharModal);

// CLICAR FORA DO MODAL SÓ FECHA SE JÁ TIVER ACEITADO ANTES (Impede que ele feche sem querer no primeiro acesso)
if (modalLgpd) {
  modalLgpd.addEventListener('click', function(e) {
    if (e.target === this && termoAceitoNestaSessao) {
      fecharModal();
    }
  });
}

// === LÓGICA DE ATIVAÇÃO DE CONTA (LOGIN) ===
const formLogin = document.getElementById('formularioLogin');
const areaLogin = document.getElementById('area-login');
const areaLogado = document.getElementById('area-logado');
const textoBoasVindas = document.getElementById('texto-boas-vindas');
const btnSairConta = document.getElementById('btn-sair-conta');

if (formLogin) {
  formLogin.addEventListener('submit', function(e) {
    e.preventDefault();
    const checkboxLgpd = document.getElementById('checkLgpd').checked;
    
    if (!checkboxLgpd) {
      alert("❌ Você precisa aceitar a Política de Privacidade (LGPD) para prosseguir.");
      return;
    }
    
    const usuario = document.getElementById('campoUsuario').value;
    
    isLogado = true;
    areaLogin.style.display = 'none';
    areaLogado.style.display = 'block';
    textoBoasVindas.innerText = `Olá, ${usuario}!`;
    
    alert(`✨ Que bom ter você na família, ${usuario}! Sua conta foi ativada.`);
    this.reset();
    
    if(carrinho.length > 0) {
      mudarAba('Carrinho');
    }
  });
}

if (btnSairConta) {
  btnSairConta.addEventListener('click', () => {
    isLogado = false;
    areaLogin.style.display = 'block';
    areaLogado.style.display = 'none';
    alert("Você saiu da sua conta. Até logo!");
  });
}
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SÓ Multas | Defesa de trânsito</title>
  <meta name="description" content="A SÓ Multas é especialista em proteção do direito de dirigir no Brasil. Defesa para multas de bafômetro, Lei Seca e recursos de trânsito." />
  <meta property="og:title" content="SÓ Multas | Defesa de trânsito" />
  <meta property="og:description" content="Especialistas em defesa de trânsito. Mais de 80 mil clientes atendidos com 94% de taxa de sucesso." />
  <meta property="og:type" content="website" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>

<?php
  $whatsapp_number = "5561992212024";
  $whatsapp_default = "ola! acessei o site da SÓ Multas Lago Sul e tenho interesse em saber mais.";
  $whatsapp_link = "https://wa.me/{$whatsapp_number}/?text=" . urlencode($whatsapp_default);
  $year = date("Y");
?>

<!-- ══ Navbar ══ -->
<header class="navbar">
  <div class="container">
    <a href="#" class="navbar-logo" aria-label="SÓ Multas">
      <img src="assets/logo-so-multas.png" alt="SÓ Multas - A sua ajuda especializada" />
    </a>

    <nav class="navbar-links" aria-label="Principal">
      <a href="#servicos">SERVIÇOS</a>
      <a href="#processo">SOBRE</a>
      <a href="#resultados">RESULTADOS</a>
      <a href="#contato">CONTATO</a>
    </nav>

    <a href="<?= $whatsapp_link ?>" target="_blank" rel="noopener noreferrer" class="navbar-cta">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      Área do Cliente
    </a>

    <button id="navbar-toggle" class="navbar-toggle" aria-label="Abrir menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
  </div>

  <div id="mobile-menu" class="mobile-menu">
    <a href="#servicos">SERVIÇOS</a>
    <a href="#processo">SOBRE</a>
    <a href="#resultados">RESULTADOS</a>
    <a href="#contato">CONTATO</a>
  </div>
</header>

<main>

<!-- ══ Hero gradient wrapper ══ -->
<div class="hero-gradient">

<!-- ══ Hero ══ -->
<section class="hero">
  <div class="container">
    <div>
      <div class="hero-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--brand)"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span>Especialistas em defesa de trânsito</span>
      </div>

      <h1>
        Oferecemos ajuda especializada para multas de
        <span>bafômetro</span>
      </h1>

      <p class="hero-subtitle">A SÓ Multas é especialista em proteção do direito de dirigir no Brasil.</p>

      <div class="hero-buttons">
        <a href="<?= $whatsapp_link ?>" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Fale com um especialista
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <a href="#processo" class="btn-outline">Conheça nosso processo</a>
      </div>

      <div class="hero-stats">
        <div class="hero-stat-avatars">
          <div class="avatar-stack">
            <span>C</span><span>M</span><span>R</span>
          </div>
          <div class="hero-stat-label">
            <strong>+80 mil</strong>
            <small>clientes atendidos</small>
          </div>
        </div>

        <div class="hero-stars">
          <div class="stars">
            <?php for ($i = 0; $i < 5; $i++): ?>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <?php endfor; ?>
          </div>
          <strong style="font-size:14px;color:var(--brand)">8.3</strong>
          <small style="font-size:12px;color:var(--muted-foreground)">Reclame Aqui</small>
        </div>
      </div>
    </div>

    <div class="hero-image-wrapper">
      <div class="hero-image-accent"></div>
      <div class="hero-image">
        <img src="assets/hero-atendimento.png" alt="Equipe da SÓ Multas atendendo cliente" />
      </div>
      <div class="hero-float-card">
        <div class="float-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <strong>94% de sucesso</strong>
          <small>Taxa comprovada desde 2015</small>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ Help Section ══ -->
<section id="servicos" class="help-section">
  <div class="container">
    <div class="help-box">
      <div class="help-inner">
        <div class="help-label">
          <p>Como podemos te ajudar?</p>
          <p>Selecione a opção mais adequada</p>
        </div>

        <a href="#lei-seca" class="help-option">
          <div class="help-option-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          </div>
          <div>
            <strong>Fui parado na blitz do bafômetro.</strong>
            <small>Defesa para quem foi abordado na Lei Seca</small>
          </div>
        </a>

        <a href="#nao-perder-cnh" class="help-option">
          <div class="help-option-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <strong>Não quero perder minha CNH</strong>
            <small>Auxílio para não perder a carteira</small>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

</div><!-- end hero-gradient -->

<!-- ══ Services ══ -->
<?php
$services = [
  [
    "id" => "lei-seca",
    "class" => "dark",
    "tag" => "Recurso para Lei Seca (Bafômetro)",
    "title" => "Recurso para Lei Seca (Bafômetro)",
    "desc" => "Feito para quem precisa de ajuda especializada porque foi parado na blitz do bafômetro.",
    "points" => [
      "Foi abordado em uma blitz e soprou o bafômetro",
      "Foi abordado em uma blitz de balada segura ou Lei Seca",
      "Foi abordado e se recusou a soprar o bafômetro",
      "Sofreu um acidente de carro e soprou o bafômetro ou realizou exame de sangue",
    ],
    "showProcess" => true,
  ],
  [
    "id" => "nao-perder-cnh",
    "class" => "light",
    "tag" => "Não quero perder minha CNH",
    "title" => "Não quero perder minha CNH",
    "desc" => "Feito para quem precisa de auxílio para não perder a habilitação.",
    "points" => [
      "Transitar em velocidade em mais de 50% do que o permitido",
      "Dirigir com a carteira suspensa",
      "Dirigir sem capacete",
      "Manobra perigosa",
    ],
    "showProcess" => false,
  ],
  [
    "id" => "recurso-multa",
    "class" => "medium",
    "tag" => "Recurso contra multa de trânsito",
    "title" => "Recurso contra multa de trânsito",
    "desc" => "Feito para quem não concorda com uma multa de trânsito.",
    "points" => [
      "Transitar em velocidade em até 20% do permitido",
      "Estacionar em local proibido",
      "Avanço de sinal",
      "Cinto de segurança",
    ],
    "showProcess" => false,
  ],
];

$checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
$msgSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

foreach ($services as $i => $s):
?>
<section id="<?= $s['id'] ?>" class="service-block <?= $s['class'] ?>">
  <?php if ($i > 0): ?><div class="service-divider"></div><?php endif; ?>
  <div class="container">
    <div class="service-grid">
      <div>
        <p class="service-tag"><?= $s['tag'] ?></p>
        <h2 class="service-title"><?= $s['title'] ?></h2>
        <p class="service-desc"><?= $s['desc'] ?></p>
        <div class="service-buttons">
          <a href="<?= $whatsapp_link ?>" target="_blank" rel="noopener noreferrer" class="btn-danger">
            <?= $msgSvg ?> Converse conosco
          </a>
          <?php if ($s['showProcess']): ?>
          <a href="#processo" class="btn-outline-service">Conheça melhor o serviço</a>
          <?php endif; ?>
        </div>
      </div>
      <div>
        <p class="service-points-label">Principais situações que atendemos:</p>
        <?php foreach ($s['points'] as $point): ?>
        <div class="service-point">
          <?= $checkSvg ?>
          <span><?= $point ?></span>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
<?php endforeach; ?>

<!-- ══ Process ══ -->
<section id="processo" class="process-section">
  <div class="container">
    <h2 class="process-title">A SÓ Multas vai muito além de recursos. Cuidamos do seu caso em todas as etapas, de forma individualizada.</h2>

    <div class="process-table-wrapper">
      <table class="process-table">
        <thead>
          <tr>
            <th>Etapas</th>
            <th>SÓ Multas</th>
            <th>Outras empresas</th>
          </tr>
        </thead>
        <tbody>
          <?php
          $steps = [
            ["Atendimento inicial", "Atendimento personalizado à situação do cliente"],
            ["Análise da solução", "Entender qual a melhor solução"],
            ["Criar doc de defesa", "Aplicar estratégias de acordo com o seu caso"],
            ["Apresentar a defesa", "Protocolar no órgão de trânsito"],
            ["Acompanhar a defesa", "Acompanhar o resultado e situação do cliente"],
            ["Finalização", "Pós venda e orientação"],
          ];
          $checkIcon = '<span class="icon-check"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>';
          $xIcon = '<span class="icon-x"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>';
          foreach ($steps as $j => $step):
          ?>
          <tr>
            <td><strong><?= $step[0] ?></strong><small><?= $step[1] ?></small></td>
            <td><?= $checkIcon ?></td>
            <td><?= $j < 3 ? $checkIcon : $xIcon ?></td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ══ Results ══ -->
<section id="resultados" class="results-section">
  <div class="container">
    <div class="results-header">
      <p>Resultados comprovados</p>
      <h2>Nossos números falam por nós</h2>
    </div>
    <div class="results-grid">
      <article class="result-card">
        <div class="number" data-target="94" data-suffix="%" data-decimals="0">0%</div>
        <p class="label">Taxa de sucesso</p>
        <p class="sub">Medida desde 2015</p>
      </article>
      <article class="result-card">
        <div class="number" data-target="80" data-suffix=" mil" data-decimals="0">0 mil</div>
        <p class="label">Clientes atendidos</p>
      </article>
      <article class="result-card">
        <div class="number" data-target="100" data-suffix=" mil" data-decimals="0">0 mil</div>
        <p class="label">Casos defendidos</p>
      </article>
      <article class="result-card">
        <div class="number" data-target="8.3" data-suffix="" data-decimals="1">0</div>
        <p class="label">Nota no Reclame Aqui</p>
        <p class="sub">Indicados ao prêmio 2024</p>
      </article>
    </div>
  </div>
</section>

<!-- ══ Testimonials ══ -->
<section class="testimonials-section">
  <div class="container">
    <div class="testimonials-header">
      <div>
        <p>Depoimentos</p>
        <h2>Nossos clientes comprovam a qualidade</h2>
      </div>
      <div class="carousel-controls">
        <button id="carousel-prev" class="carousel-btn" aria-label="Anterior">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button id="carousel-next" class="carousel-btn" aria-label="Próximo">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>

    <div style="overflow:hidden">
      <div id="carousel-track" class="carousel-track">
        <?php
        $testimonials = [
          ["text" => "A minha experiência com a Só Multas foi muito satisfatória, super recomendo, eles são atenciosos, educados e organizados. Cumprem o que prometem e com certeza eu indico a SÓ Multas.", "name" => "Baltazar", "role" => "Defesa de Processo por Infração", "img" => "assets/baltazar.avif"],
          ["text" => "Fiquei muito satisfeito com a transparência e atendimento da equipe da Só Multas. Graças ao recurso não tive que pagar uma multa aplicada de forma injusta no valor de R$ 3000,00 e ter minha CNH suspensa por 12 meses. Valeu cada centavo!", "name" => "Caio", "role" => "Tratamento Especial - Embriaguez", "img" => "assets/caio.avif"],
          ["text" => "O trabalho da SÓ Multas foi muito técnico e eficiente. Fez minha defesa baseado em falhas técnicas do radar instalado. Sempre respondendo prontamente as vezes que pedi atualização do andamento do recurso cujo deferimento foi favorável. Recomendo os serviços prestados pela SÓ Multas.", "name" => "José Maria", "role" => "Recurso de Multa", "img" => "assets/jose-maria.avif"],
          ["text" => "A minha experiência com a SÓ Multas foi maravilhosa, tive uma ocorrência da lei seca, e com a ajuda da SÓ Multas imediatamente me acolheram e me deram a melhor forma de pagamento. Entramos com o processo e fomos vitoriosos. A empresa é muito séria e o atendimento é espetacular, indico mesmo!", "name" => "Mauricio", "role" => "Defesa de Processo por Pontuação", "img" => "assets/mauricio.avif"],
          ["text" => "Recebi ótimas recomendações dos serviços da SÓ Multas e resolvi buscar auxílio em minha demanda. Sempre que surgiam dúvidas eu entrava em contato e todos estão de prontidão para o atendimento. Agradeço imensamente a SÓ Multas pelo trabalho realizado onde o recurso interposto foi de grande sucesso e ao final o cancelamento da autuação foi Deferida.", "name" => "Rachel", "role" => "Defesa de Autuação", "img" => "assets/rachel.jpg"],
          ["text" => "Eu estava em uma situação complicada, com uma multa de radar que quase me custou a carteira por dois anos. Tentei me virar por conta e eles recusaram. Foi então que eu conheci o Só Multas. A equipe entrou no caso com um entendimento real do que eu estava passando, aquele peso nos ombros foi aliviado, e o que parecia um problemão foi resolvido!", "name" => "Vitor", "role" => "Tratamento Especial - PAI", "img" => "assets/vitor.jpg"],
        ];
        foreach ($testimonials as $t):
        ?>
        <article class="testimonial-card">
          <svg class="quote-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
          <p class="text">"<?= $t['text'] ?>"</p>
          <div class="testimonial-author">
            <img src="<?= $t['img'] ?>" alt="Foto de <?= $t['name'] ?>" loading="lazy" />
            <div>
              <strong><?= $t['name'] ?></strong>
              <small><?= $t['role'] ?></small>
            </div>
          </div>
        </article>
        <?php endforeach; ?>
      </div>
    </div>

    <div id="carousel-dots" class="carousel-dots">
      <?php for ($i = 0; $i < count($testimonials); $i++): ?>
      <button class="carousel-dot<?= $i === 0 ? ' active' : '' ?>" data-index="<?= $i ?>" aria-label="Depoimento <?= $i + 1 ?>"></button>
      <?php endfor; ?>
    </div>
  </div>
</section>

<!-- ══ Media ══ -->
<section class="media-section">
  <div class="container">
    <p class="label">Presença na mídia</p>
    <div class="media-logos">
      <img src="assets/logo-g1.png" alt="Logo G1" loading="lazy" />
      <img src="assets/logo-metropoles.png" alt="Logo Metrópoles" loading="lazy" />
      <img src="assets/logo-correio.png" alt="Logo Correio Braziliense" loading="lazy" />
      <img src="assets/logo-r7.png" alt="Logo R7" loading="lazy" />
      <img src="assets/logo-band.png" alt="Logo Band" loading="lazy" />
    </div>
  </div>
</section>

<!-- ══ Contact ══ -->
<section id="contato" class="contact-section">
  <div class="container">
    <div class="contact-grid">
      <div>
        <h2>Presente em todo o país</h2>
        <p class="subtitle">Com unidades em mais de 100 cidades, a SÓ Multas possui uma estrutura robusta para te atender.</p>
        <div class="address-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div>
            <strong>Unidade Lago Sul — Brasília/DF</strong>
          </div>
        </div>
      </div>

      <div class="contact-form-card">
        <h3>Envie uma Mensagem</h3>
        <p class="desc">Insira seus dados abaixo e inicie uma conversa no WhatsApp.</p>
        <form id="contact-form" class="contact-form">
          <input type="text" id="contact-name" placeholder="Seu nome" required />
          <input type="tel" id="contact-phone" placeholder="Seu telefone" required />
          <button type="submit" class="btn-submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

</main>

<!-- ══ Footer ══ -->
<footer class="footer">
  <div class="container">
    <img src="assets/logo-so-multas.png" alt="SÓ Multas" />
    <p>© <?= $year ?> SÓ Multas. Todos os direitos reservados.</p>
  </div>
</footer>

<!-- ══ WhatsApp Float ══ -->
<a href="<?= $whatsapp_link ?>" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Abrir WhatsApp">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
</a>

<script src="js/main.js"></script>
</body>
</html>
